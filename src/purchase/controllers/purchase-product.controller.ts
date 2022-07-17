import { Request, Response } from 'express';
import { HttpResponse } from '../../shared/response/http.response';
import { PurchaseProductService } from '../services/purchase-product.service';

export class PurchaseProductController {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse(),
    private readonly purchaseProductService: PurchaseProductService = new PurchaseProductService()
  ) {}
}
