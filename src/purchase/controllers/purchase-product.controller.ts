import { Request, Response } from 'express';
import { HttpResponse } from '../../shared/response/http.response';
import { PurchaseProductService } from '../services/purchase-product.service';

export class PurchaseProductController {
  constructor(
    private readonly httpResponse: HttpResponse = new HttpResponse(),
    private readonly purchaseProductService: PurchaseProductService = new PurchaseProductService()
  ) {}

  async getPurchaseProducts(req: Request, res: Response) {
    try {
      const data = await this.purchaseProductService.findAllPurchaseProducts();
      if (data.length === 0) {
        return this.httpResponse.NotFound(res, 'No se encontro la data');
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.log(error);
      return this.httpResponse.Error(res, error);
    }
  }
}
