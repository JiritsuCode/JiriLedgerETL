# jiri_ledger_etl

***This project use NodeJS version 20.x so pls use correct version.***

## For local development:

#### To install dependencies:

Install Redis 7.x version.
Install NodeJS.

Run this command in project folder:
```bash
npm install
```

#### Environment variables

Look at `.env.development`. This file contains set of needed env variales. This file is public and doesn't contain any secrets.
**WARNING: Pls don't add any secrets to this file. It contains only basic values and exists without any encription in the repo.**
Create locally your own `.env` file and use it for secrets locally. `.env` added to `.gitignore`. Use it to override values from `.env.development`.

#### Local development:

This project has several options for start.
It can make full sync of data from RPC API or add only new data from last sync.
Also it can do it using BullMQ background processing or without it.
BullMQ usage means that the sync process is divided into two steps:
1. First process reads data from RPC API and stores it to Redis.
2. Second process reads data from Redis and load it to Dune.
The first process exists in `index.ts` file.
BullMQ process (worker) exists in `workers/export_worker.ts` file.
Every file has `handler` function which get `event` param which is Lambda event. For development we can use regular hash as event.
This has has two keys `[exportType, bullmq]` and both are required.
Valid values for `exportType`: "full_export", "new_data_only"
Valid values for `bullmq`: "with_bullmq", "without_bullmq"

#### Why we need BullMQ and two steps sync?
Because it makes the sync process more reliable. Dune tables don't have any uniq constraints so it's easy to load same data several time. Dune API have rate limits and we should handle such casses. And finally our main sync process can fail because of many reasons like app process crash, network issues, infrastructure issues and so on.

#### To run it locally:

Add handler function call to the file and run these commands.

Compile TypeScript code to `dist` folder:
```bash
npx tsc
```
Start main process:
```bash
node --env-file=.env --env-file=.env.development ./dist/index.js new_data_only with_bullmq
```

Start BullMQ process:
```bash
node --env-file=.env --env-file=.env.development ./dist/workers/export_worker.js
```

## For production:

#### General info:
We use AWS Lambda, ElastiCache and EventBridge in production.
Lambda has NodeJS 20.x runtime out of the box. Dependencies for the project exist in Lambda Layer `DuneETLNodeDependencies`.
We have two Lambdas. `duneETL` for first process that get data from RPC API and store it to ElastiCache Redis and `duneETLBullMQWorker` for second BullMQ process that reads data from ElastiCache Redis and send to Dune API.
EventBridge also has two scheduled events that invoke them one by one. And also we have ElastiCache Redis to store data for sync with Dune and offsets from last sync for Sources and Proofs.

#### To deploy:

Compile TypeScript code to `dist` folder:
```bash
npx tsc
```

Create a .zip archive and upload it using AWS Lambda console.
![Upload .zip file with sources](https://downloader.disk.yandex.ru/preview/4446f772171e7d34ad322a9e00ce0f67eca3b5343468050cb070c206784a370c/6667ce0d/S9lD_Py4j8aStgPc46bBmcoDSlH4k8fD0e2Tb8x9O5utt-mosioHmUSEDWBZWJyNTat3xUkEUmpkur3-RSLNaA%3D%3D?uid=0&filename=2024-06-11_03-07-27.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048)

#### Environment variables:

Go to `Configuration` -> `Environment variables` to change values of env vars.
