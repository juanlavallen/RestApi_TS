import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service';

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  async getCategories(req: Request, res: Response) {
    try {
      const data = await this.categoryService.findAllCategories();
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }

  async getCategoryById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.categoryService.findCategoryById(id);
    } catch (error) {
      console.log(error);
    }
  }
}
