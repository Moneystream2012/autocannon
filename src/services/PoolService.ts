'use strict'

import RedisService from './RedisService';
import { Worker } from 'worker_threads';
import { Pool } from 'generic-pool';
const createPool = require('thread-pool-node');

export type FibonachiTask = {
  ticket: string;
  index: number;
};

export type FibonachiResult = FibonachiTask & {
  result: number;
};

export class PoolService {
  static pool: Pool<Worker> = createPool({
    workerPath: './src/workers/fibonacci.ts',
    workerOptions: {
      workerData: {}
    },
    // passed to generic-pool
    poolOptions: {
      min: 2,
      max: 10000,
    }
  });

  static async thread(task: FibonachiTask) {
    const worker = await this.pool.acquire();
    
    const onMessage = (result: FibonachiResult) => {
      RedisService.set(result.ticket, result.result);
      this.pool.release(worker);
      worker.removeListener("message", onMessage);
    };

    worker.on("message", onMessage);
    worker.postMessage(task);
  }
}
