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

  async getPurchaseProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await this.purchaseProductService.findPurchaseProductById(
        id
      );
      if (!data) {
        return this.httpResponse.NotFound(res, 'No se encontro la data');
      }
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.log(error);
      return this.httpResponse.Error(res, error);
    }
  }

  async createPurchaseProduct(req: Request, res: Response) {
    try {
      const data = await this.purchaseProductService.createPurchaseProduct(
        req.body
      );
      return this.httpResponse.Ok(res, data);
    } catch (error) {
      console.log(error);
      return this.httpResponse.Error(res, error);
    }
  }
}
