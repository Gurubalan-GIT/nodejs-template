import db from "../config/db/index.js";

export interface ProductsDTO {}

export class ProductsModel {
  static getProducts(): Promise<any> {
    return db.execute('SELECT * FROM products');
  }
}
