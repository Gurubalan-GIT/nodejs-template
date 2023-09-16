import { ProductsModel } from "../models/products.js";

export class ProductsService {
  static async getProducts() {
    try {
      const [rows, _fields] = await ProductsModel.getProducts();
      return rows;
    } catch (error) {
      return error;
    }
  }
}
