import * as helpers from "./helpers";
import { DataDormatter } from './data_formatter';
import { RPCAPI } from "./rpc_api";
import { DuneAPI } from './dune_api';
import { Queue } from 'bullmq';

// Main class for the ETL process
export class ETL {
  private redisClient: any;
  private dataFormatter: DataDormatter;
  private duneAPI: DuneAPI;
  private rpcApi: RPCAPI;
  private duneExportQueue: Queue;

  public constructor(redisClient: any, dataFormatter: DataDormatter, duneAPI: DuneAPI, rpcApi: RPCAPI, duneExportQueue: Queue) {
    this.redisClient = redisClient;
    this.dataFormatter = dataFormatter;
    this.duneAPI = duneAPI;
    this.rpcApi = rpcApi;
    this.duneExportQueue = duneExportQueue;
  }

  // Entry point for the export to Dune process
  public async export(fullExport: string, bullmq_flag: string) {
    if(fullExport === 'full_export') {
      await this.fullExport(bullmq_flag);
    } else if(fullExport === 'new_data_only') {
      await this.exportNewData(bullmq_flag);
    }
  }

  // Clear all Dune tables and export all data from chain to Dune
  private async fullExport(bullmq_flag: string) {
    await helpers.clearDuneTables(this.duneAPI)
    await helpers.clearOffsetsForSources(this.redisClient);
    await helpers.clearOffsetsForProofs(this.redisClient);
    await this.exportDataToDune(bullmq_flag);
    await this.redisClient.disconnect();

    // if(bullmq_flag === 'without_bullmq') {
    //   return "ETL process finished successfully"
    // }
  }

  // Export only new data from chain to Dune
  private async exportNewData(bullmq_flag: string) {
    await this.exportDataToDune(bullmq_flag);
    await this.redisClient.disconnect();
    let queueSizes = await this.duneExportQueue.getJobCounts()
    if(queueSizes['active'] === 0 && queueSizes['delayed'] === 0 && queueSizes['waiting'] === 0) {
      return "ETL process finished successfully"
    }
  }

  // Method with the main logic to export data to Dune
  private async exportDataToDune(bullmq_flag: string) {
    // Export Sources
    let sources: any[] = []; // Collection of all sources
    let loadedSources = []; // Collection of sources loaded from RPC
    do {
      // Get the last Sources offset from Redis
      let lastOffset: number = Number(await this.redisClient.get(`lastSourcesOffset`));
      if (!lastOffset || isNaN(lastOffset) || Number(lastOffset) <= 0) {
        await this.redisClient.set(`lastSourcesOffset`, 1)
        lastOffset = Number(await this.redisClient.get(`lastSourcesOffset`));
      };

      // Get sources from RPC
      loadedSources = await this.rpcApi.loadSourcesPaged(lastOffset);
      loadedSources ||= [];

      // Add loaded sources to the all sources collection
      Array.prototype.push.apply(sources, loadedSources);

      // Update the last Sources offset in Redis
      lastOffset = lastOffset + loadedSources.length;
      await this.redisClient.set(`lastSourcesOffset`, lastOffset)

      // If no sources were loaded, break the loop
      if(loadedSources.length === 0) {
        break;
      }

      // Convert loaded Sources to CSV
      let formattedSources = this.dataFormatter.formatSources(loadedSources);

      // Export sources to Dune
      if(bullmq_flag === 'without_bullmq') {
        this.duneAPI.exportSources(formattedSources);
      } else if(bullmq_flag === 'with_bullmq') {
        this.duneExportQueue.add('duneExportSources', { sources: formattedSources }, {
          attempts: 5,
          backoff: {
            type: 'exponential',
            delay: 100,
          },
          removeOnComplete: 50,
          removeOnFail: 500,
        });
      }
    } while (loadedSources.length > 0);

    // Export Proofs
    let proofs: any[] = []; // Collection of all proofs
    // For each source, load proofs from RPC and export them to Dune
    for (const source of sources) {
      let proofsForSource = []; // Collection of loaded proofs for a source
      do {
        // Get the last Proofs offset for the source from Redis
        let lastOffset: number = Number(await this.redisClient.get(`lastProofsOffsetForSource${source['id']}`));
        if (!lastOffset || isNaN(lastOffset) || Number(lastOffset) <= 0) {
          await this.redisClient.set(`lastProofsOffsetForSource${source['id']}`, 1)
          lastOffset = Number(await this.redisClient.get(`lastProofsOffsetForSource${source['id']}`));
        };

        // Get proofs from RPC
        proofsForSource = await this.rpcApi.loadProofsPaged(source, lastOffset);
        proofsForSource ||= [];

        // Add loaded proofs to the all proofs collection
        Array.prototype.push.apply(proofs, proofsForSource);

        // Update the last Proofs offset for the source in Redis
        lastOffset = lastOffset + proofsForSource.length;
        await this.redisClient.set(`lastProofsOffsetForSource${source['id']}`, lastOffset)

        // If no proofs were loaded, break the loop
        if(proofsForSource.length === 0) {
          break;
        }

        // Convert loaded Proofs to CSV
        let formattedProofsForSource = this.dataFormatter.formatProofs(proofsForSource);

        // Export proofs to Dune
        if(bullmq_flag === 'without_bullmq') {
          this.duneAPI.exportProofs(formattedProofsForSource);
        } else if(bullmq_flag === 'with_bullmq') {
          this.duneExportQueue.add('duneExportProofs', { proofs: formattedProofsForSource }, {
            attempts: 5,
            backoff: {
              type: 'exponential',
              delay: 100,
            },
            removeOnComplete: 50,
            removeOnFail: 500,
          });
        }
      } while (proofsForSource.length > 0);
    }

    // Export Verifiers
    await this.duneAPI.clearVerifiers(); // Clear the Verifiers table in Dune (because we don't have pagination for Verifiers)
    let verifiers = await this.rpcApi.loadVerifiers() || []; // Load Verifiers from RPC
    let formattedVerifiers = this.dataFormatter.formatVerifiers(verifiers); // Convert Objects to CSV
    await this.duneAPI.exportVerifiers(formattedVerifiers); // Export Verifiers to Dune

    // Log the results
    console.info(`All sources length: ${sources.length}`);
    console.info(`All proofs length: ${proofs.length}`);
    console.info(`All verifiers length: ${verifiers.length}`);

    return true;
  }
}
