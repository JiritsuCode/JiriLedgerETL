import { RPCAPI } from "./lib/rpc_api";
import { DuneAPI } from "./lib/dune_api";
import { DataDormatter } from "./lib/data_formatter";
import { ETL } from "./lib/etl";
import * as helpers from "./lib/helpers";
import { Queue } from 'bullmq';
import { createClient } from 'redis';

console.log(`Starting ETL process at ${new Date().toLocaleString()}`);


// Check if all required environment variables are set
if(helpers.env_checks() === false) {
  process.exit(0);
}

// Check if all required process parameters are set and valid
// example: "bun run index.ts <exportType> <bullmq_flag>"
// valid values for exportType: "full_export", "new_data_only"
// valid values for bullmq_flag: "with_bullmq", "without_bullmq"
if(helpers.validateProcessParams(process.argv) === false) {
  process.exit(0);
}

(async () => {
  const rpcApi = new RPCAPI();
  const duneAPI = new DuneAPI(process.env.DUNE_API_KEY || '', process.env.DUNE_WORKSPACE || '');
  const dataFormatter = new DataDormatter();
  const redisClient = await createClient({url: 'redis://localhost:6379'})
    .on('error', err => console.log('Redis Client Error', err))
    .connect();
  const duneExportQueue = new Queue('duneExportQueue', { connection: {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT || ''),
  }});
  const etl = new ETL(redisClient, dataFormatter, duneAPI, rpcApi, duneExportQueue);

  await etl.export(process.argv[2], process.argv[3])

  process.exit(0);
})();