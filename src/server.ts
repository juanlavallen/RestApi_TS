import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ConfigServer } from './config/config';

class Server extends ConfigServer {
  public app: Application = express();
  private port: number = this.getNumberEnv('PORT') || 5000;

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());

    this.start();
  }

  public start() {
    this.app.listen(this.port, () => {
      console.log('Server is running on port', this.port);
    });
  }
}

new Server();
