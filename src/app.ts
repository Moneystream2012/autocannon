import { Application, json, urlencoded } from 'express';
import helmet from 'helmet';
import Router from './router';
import RedisService, {RedisClientType} from "./services/RedisService";
import client from "./services/RedisService";
import {PoolService} from "./services/PoolService";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    const client = RedisService;

    client.connect()
      .then(r => {
        console.log('redis connected');
        app.set('cache', client);
        new Router(app);
        new PoolService();
      });
  }

  private config(app: Application): void {
    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use(helmet());
  }
}

process.on("beforeExit", function (err) {
  console.error(err);
});
