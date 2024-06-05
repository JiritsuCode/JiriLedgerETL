import { Worker, Job, Queue } from 'bullmq';
import { DuneAPI } from "../lib/dune_api";

// BullMQ worker for exporting data to Dune
export const duneExportWorker = new Worker(
  'duneExportQueue',
  async job => {
    const duneAPI = new DuneAPI(process.env.DUNE_API_KEY || '', process.env.DUNE_WORKSPACE || '');

    let result;
    if(job.name === 'duneExportSources') {
      if (job.data['sources'] === undefined || job.data['sources'].length === 0) {
        return;
      }
      result = await duneAPI.exportSources(job.data['sources']);
    } else if(job.name === 'duneExportProofs') {
      if (job.data['proofs'] === undefined || job.data['proofs'].length === 0) {
        return;
      }
      result = await duneAPI.exportProofs(job.data['proofs']);
    }

    if (result && result["rows_written"] > 0) {
      return;
    } else {
      throw Worker.RateLimitError();
    }
  },
  {
    connection: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT || ''),
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

  const duneExportQueue = new Queue('duneExportQueue', { connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || ''),
  }});

  let queueSizes = await duneExportQueue.getJobCounts()

  if(queueSizes['active'] === 0 && queueSizes['delayed'] === 0 && queueSizes['waiting'] === 0) {
    process.exit(0);
  }
});

duneExportWorker.on('failed', (job: any) => {
  console.log(`Job ${job?.id} has failed!`);
});

duneExportWorker.on("error", (error) =>
  console.log("Worker Error", error)
);
