import { Request, Response } from 'express';
import { CategoryService } from '../services/category.service';

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
}
