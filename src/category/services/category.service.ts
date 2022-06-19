import { UpdateResult } from 'typeorm';
import { BaseService } from '../../config/base.service';
import { CategoryDto } from '../dto/category.dto';
import { CategoryEntity } from '../entities/category.entity';

export class CategoryService extends BaseService<CategoryEntity> {
  constructor() {
    super(CategoryEntity);
  }

  async findAllCategories(): Promise<CategoryEntity[]> {
    return (await this.repository).find();
  }

  async findCategoryById(id: string): Promise<CategoryEntity | null> {
    return (await this.repository).findOneBy({ id });
  }

  async createCategory(body: CategoryDto): Promise<CategoryEntity> {
    return (await this.repository).save(body);
  }

  async updateCategory(id: string, data: CategoryDto): Promise<UpdateResult> {
    return (await this.repository).update(id, data);
  }
}
