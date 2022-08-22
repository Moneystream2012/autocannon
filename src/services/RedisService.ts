'use strict'

import { createClient } from 'redis';

export type RedisClientType = ReturnType<typeof createClient>;

const client = createClient({
  url: `redis://redis-server:6379`,
});

export default client;
