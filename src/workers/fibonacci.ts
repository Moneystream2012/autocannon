import { parentPort } from 'worker_threads';
import { FibonachiTask } from '../services/PoolService';
import { FibonachiService } from '../services/FibonachiService';

// @ts-ignore
parentPort.on('message', (task: FibonachiTask) => {
  // @ts-ignore
  parentPort.postMessage({
    ticket: task.ticket,
    index: task.index,
    result: FibonachiService.evaluate(task.index),
  });
});
