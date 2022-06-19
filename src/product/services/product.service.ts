import { BaseService } from '../../config/base.service';
import { ProductEntity } from '../entities/product.entity';

export class ProductService extends BaseService<ProductEntity> {
  constructor() {
    super(ProductEntity);
  }

  async findAllProducts(): Promise<ProductEntity[]> {
    return (await this.repository).find();
  }

  async findProductById(id: string): Promise<ProductEntity | null> {
    return (await this.repository).findOneBy({ id });
  }
}
