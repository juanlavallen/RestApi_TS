import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { PurchaseDto } from '../dto/purchase.dto';
import { PurchaseEntity } from '../entities/purchase.entity';

export class PurchaseService extends BaseService<PurchaseEntity> {
  constructor() {
    super(PurchaseEntity);
  }

  async findAllPurchases(): Promise<PurchaseEntity[]> {
    return (await this.repository).find();
  }

  async findPurchaseById(id: string): Promise<PurchaseEntity | null> {
    return (await this.repository).findOneBy({ id });
  }

  async createPurchase(body: PurchaseDto): Promise<PurchaseEntity> {
    return (await this.repository).save(body);
  }

  async updatePurchase(id: string, data: PurchaseDto): Promise<UpdateResult> {
    return (await this.repository).update(id, data);
  }

  async deletePurchase(id: string): Promise<DeleteResult> {
    return (await this.repository).delete({ id });
  }
}
