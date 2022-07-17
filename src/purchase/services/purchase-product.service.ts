import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { PurchaseProductsEntity } from '../../custom/entities/purchases-products.entity';
import { ProductService } from '../../product/services/product.service';
import { PurchaseProductDto } from '../dto/purchase-product.dto';

export class PurchaseProductService extends BaseService<PurchaseProductsEntity> {
  constructor(
    private readonly productService: ProductService = new ProductService()
  ) {
    super(PurchaseProductsEntity);
  }

  async findAllPurchaseProducts(): Promise<PurchaseProductsEntity[]> {
    return (await this.repository).find();
  }

  async findPurchaseProductById(
    id: string
  ): Promise<PurchaseProductsEntity | null> {
    return (await this.repository).findOneBy({ id });
  }

  async createPurchaseProduct(
    body: PurchaseProductDto
  ): Promise<PurchaseProductsEntity> {
    return (await this.repository).create(body);
  }

  async updatePurchaseProduct(
    id: string,
    data: PurchaseProductDto
  ): Promise<UpdateResult> {
    return (await this.repository).update(id, data);
  }

  async deletePurchaseProduct(id: string): Promise<DeleteResult> {
    return (await this.repository).delete({ id });
  }
}
