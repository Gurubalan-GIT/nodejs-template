import { NextFunction, Request, Response } from "express";
import { ProductsService } from "../services/products.js";

export class ProductsController {
  static async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const products = await ProductsService.getProducts();
      return res.status(200).json(products);
    } catch (e) {
      return res.status(500);
    }
  }
}
