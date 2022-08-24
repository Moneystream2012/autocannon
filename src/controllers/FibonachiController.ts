import { Request, Response } from 'express';
import { PoolService } from '../services/PoolService';
import RedisService from '../services/RedisService';

export default class FibonachiController {
  public async inputData(req: Request, res: Response) {
    if (! req.app.get('cache')) {
      return res.status(400);
    }
    
    const index = Number(req.body.number || req.params.number);
    const ticket = String(Math.round(Date.now()));
    await PoolService.thread({ticket, index});
    
    res.status(200).send({ticket: ticket});
  }

  public async outputData(req: Request, res: Response) {
    if (! req.app.get('cache')) {
      return res.status(400);
    }

    const ticket = String(req.query.ticket);
    const value = await RedisService.get(ticket);

    res.status(200)
        .send(value !== null ? { Fibonacci: value } : "not found");
  }
}
