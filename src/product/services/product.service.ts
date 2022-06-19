import { DeleteResult, UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { ProductDto } from '../dto/product.dto';
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

  async createProduct(body: ProductDto): Promise<ProductEntity> {
    return (await this.repository).save(body);
  }
  
  async updateProduct(id: string, data: ProductDto): Promise<UpdateResult> {
    return (await this.repository).update(id, data);
  }

}
