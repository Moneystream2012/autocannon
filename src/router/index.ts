import { Application } from 'express';
import FibonachiController from '../controllers/FibonachiController';

export default class Router {
  private fController: FibonachiController;
  
  constructor(app: Application) {
    this.fController = new FibonachiController();
    
    app.post('/input', this.fController.inputData);
    app.get('/output', this.fController.outputData);
  }
}
