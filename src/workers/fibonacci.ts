import { parentPort } from 'worker_threads';
import { FibonachiTask } from '../services/PoolService';
const BigNumber = require('big-number');

// @ts-ignore
parentPort.on('message', (task: FibonachiTask) => {
  let first: number = 0,
    last: number = 1,
    sum: number;

  for (let counter = 0; counter < task.index - 2; counter++) {
    sum = BigNumber(first).plus(last);
    first = last;
    last = sum;
  }

  // @ts-ignore
  parentPort.postMessage({ ticket: task.ticket, index: task.index, result: Number(last.toString()) });
});