import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { AppDataSource } from './data.source';

export abstract class ConfigServer {
  constructor() {
    const enviroment = this.createPath(this.nodeEnv);
    dotenv.config({ path: enviroment });
  }

  public getEnvironment(key: string) {
    return process.env[key];
  }

  public getNumberEnv(key: string): number {
    return Number(this.getEnvironment(key));
  }

  public get nodeEnv(): string {
    return this.getEnvironment('NODE_ENV')?.trim() || '';
  }

  public createPath(path: string): string {
    const arrEnv: string[] = ['env'];

    if (path.length > 0) {
      const stringToArray = path.split('.');
      arrEnv.unshift(...stringToArray);
    }
    return '.' + arrEnv.join('.');
  }

  get initConnect(): Promise<DataSource> {
    return AppDataSource.initialize();
  }
}
