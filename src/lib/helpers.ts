import { DuneAPI } from "./dune_api";

// Set of helper functions used in the main process

export function env_checks() {
  if(!process.env.PROVIDER || process.env.PROVIDER === "") {
    console.error("Please provide the RPC provider environment variable");
    return false;
  }
  if(!process.env.JIRI_LEDGER_ADDRESS || process.env.JIRI_LEDGER_ADDRESS === "") {
    console.error("Please provide the Ledger Address environment variable");
    return false;
  }
  if(!process.env.DUNE_API_KEY || process.env.DUNE_API_KEY === "") {
    console.error("Please provide the Dune API Key environment variable");
    return false;
  }
  if(!process.env.DUNE_WORKSPACE || process.env.DUNE_WORKSPACE === "") {
    console.error("Please provide the Dune Workspace environment variable");
    return false;
  }
  if(!process.env.DUNE_SOURCES_TABLE_NAME || process.env.DUNE_SOURCES_TABLE_NAME === "") {
    console.error("Please provide the Dune Sources table name environment variable");
    return false;
  }
  if(!process.env.DUNE_PROOFS_TABLE_NAME || process.env.DUNE_PROOFS_TABLE_NAME === "") {
    console.error("Please provide the Dune Proofs table name environment variable");
    return false;
  }
  if(!process.env.REDIS_HOST || process.env.REDIS_HOST === "") {
    console.error("Please provide the Redis host environment variable");
    return false;
  }
  if(!process.env.REDIS_PORT || process.env.REDIS_PORT === "") {
    console.error("Please provide the Redis port environment variable");
    return false;
  }
  return true;
}

export async function clearDuneTables(duneAPI: DuneAPI) {
  await duneAPI.clearSources();
  await duneAPI.clearVerifiers();
  await duneAPI.clearProofs();
}

export async function clearOffsetsForSources(redisClient: any) {
  await redisClient.set(`lastSourcesOffset`, 1)
}

export async function clearOffsetsForProofs(redisClient: any) {
  for (let i = 1; i <= 100; i++) {
    await redisClient.set(`lastProofsOffsetForSource${i}`, 1);
  }
}

export function validateProcessParams(exportType: string, bullmq: string) {
  if(bullmq !== 'with_bullmq' && bullmq !== 'without_bullmq') {
    console.error("Please provide the BullMQ usage flag");
    return false;
  }
  if(exportType !== 'full_export' && exportType !== 'new_data_only') {
    console.error("Please provide the correct export type");
    return false;
  }
}
