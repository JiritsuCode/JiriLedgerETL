import { Worker, Job, Queue } from 'bullmq';
import { DuneAPI } from "../lib/dune_api";
import { createClient } from 'redis';

// BullMQ worker for exporting data to Dune
export const handler = async (event: any, context: any, callback: any) => {
  console.log("BullMQ worker started")

  const duneExportWorker = new Worker(
    '{duneExportQueue}',
    async job => {
      console.log("BullMQ Job started");
      const duneAPI = new DuneAPI(process.env.DUNE_API_KEY || '', process.env.DUNE_WORKSPACE || '');

      let result;
      if(job.name === 'duneExportSources') {
        if (job.data['sources'] === undefined || job.data['sources'].length === 0) {
          console.log("No new Sources");
          return;
        }
        result = await duneAPI.exportSources(job.data['sources']);
      } else if(job.name === 'duneExportProofs') {
        if (job.data['proofs'] === undefined || job.data['proofs'].length === 0) {
          console.log("No new Proofs");
          return;
        }
        result = await duneAPI.exportProofs(job.data['proofs']);
      }

      if (result && result["rows_written"] > 0) {
        console.log("Page successfully synced with Dune");
        return;
      } else {
        console.log("Dune API error")
        throw Worker.RateLimitError();
      }
    },
    {
      autorun: false,
      connection: {
        host: process.env.REDIS_HOST,
        port: parseInt(process.env.REDIS_PORT || ''),
        tls: {},
      },
      limiter: {
        max: 70,
        duration: 100,
      },
    },
  );

  duneExportWorker.on('drained', async () => {
    console.log('Queue is drained');
  });

  duneExportWorker.on('completed', async (job: Job) => {
    console.log(`Job ${job.id} has completed!`);

    const duneExportQueue = new Queue('{duneExportQueue}', { connection: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT || ''),
      tls: {},
    }});

    let queueSizes = await duneExportQueue.getJobCounts()

    if(queueSizes['active'] === 0 && queueSizes['delayed'] === 0 && queueSizes['waiting'] === 0) {
      console.log("Dune ETL BullMQ worker finished successfully");
      duneExportWorker.close();
    }
  });

  duneExportWorker.on('failed', (job: any) => {
    console.log(`Job ${job?.id} has failed!`);
  });

  duneExportWorker.on("error", (error) =>
    console.log("Worker Error", error)
  );

  await duneExportWorker.run();
  return "BullMQ worker finished";
};

