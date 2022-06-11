import { BaseEntity, EntityTarget, Repository } from 'typeorm';
import { ConfigServer } from './config';

export class BaseService<T extends BaseEntity> extends ConfigServer {
  public repository: Promise<Repository<T>>;
  constructor(private getEntity: EntityTarget<T>) {
    super();
    this.repository = this.initRepository(this.getEntity);
  }

  async initRepository<T>(entity: EntityTarget<T>): Promise<Repository<T>> {
    const getConection = await this.initConnect;
    return getConection.getRepository(entity);
  }
}
