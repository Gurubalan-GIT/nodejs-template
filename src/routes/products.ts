import { Router } from "express";
import { ProductsController } from "../controller/products.js";
const router = Router();

router.get("/", ProductsController.getProducts);

export default router;
