import { RPCAPI } from './lib/rpc_api';
import { DuneAPI } from './lib/dune_api';
import { DataDormatter } from './lib/data_formatter';
import { ETL } from './lib/etl';
import * as helpers from './lib/helpers';
import { Queue } from 'bullmq';
import { createClient } from 'redis';

export const handler = async (event: any, context: any, callback: any) => {
    console.log(
        `Starting ETL process at ${new Date().toLocaleString()} with params: ${
            event['exportType']
        } and ${event['bullmq']}`
    );

    // Check if all required environment variables are set
    if (helpers.env_checks() === false) {
        return 'ETL process finished unsuccessfully';
    }

    // Check if all required process parameters are set and valid
    // example: "bun run index.ts <exportType> <bullmq_flag>"
    // valid values for exportType: "full_export", "new_data_only"
    // valid values for bullmq_flag: "with_bullmq", "without_bullmq"
    if (
        helpers.validateProcessParams(event['exportType'], event['bullmq']) ===
        false
    ) {
        return 'ETL process finished unsuccessfully';
    }

    const rpcApi = new RPCAPI();
    const duneAPI = new DuneAPI(
        process.env.DUNE_API_KEY || '',
        process.env.DUNE_WORKSPACE || ''
    );
    const dataFormatter = new DataDormatter();
    const redisClient = await createClient({
        url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
        socket: {
            connectTimeout: 10000,
            port: 6379,
            tls: true,
        },
    })
        .on('error', (err) => console.log('Redis Client Error', err))
        .connect();
    const duneExportQueue = new Queue('{duneExportQueue}', {
        connection: {
            host: process.env.REDIS_HOST,
            port: parseInt(process.env.REDIS_PORT || ''),
            tls: {},
        },
    });
    const etl = new ETL(
        redisClient,
        dataFormatter,
        duneAPI,
        rpcApi,
        duneExportQueue
    );

    const numSources: number = Number(
        await redisClient.get(`lastSourcesOffset`)
    );

    const logProofsForSource = async (i: number) => {
        const redisSelector: string = `lastProofsOffsetForSource${i}`;
        const offset: number = Number(await redisClient.get(redisSelector));
        console.log(`Offest for Proofs Source ${i}: ${offset}`);
    };

    console.log(`Offset for Sources: ${Number(numSources)}`);
    await Promise.all(
        Array.from({ length: Math.min(numSources, 10) }, (_, i) =>
            logProofsForSource(i)
        )
    );

    await etl.export(event['exportType'], event['bullmq']);

    return 'ETL process finished successfully';
};
