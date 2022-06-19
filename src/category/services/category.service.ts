import { BaseService } from '../../config/base.service';
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
}
