import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router();

router.get("/products", productController.getAllProducts);

router.get("/products/:id", productController.getOneProduct);

router.post("/new-product", productController.createProduct);

router.put("/products/:id", productController.updateProduct);

router.delete("/products/:id", productController.deleteProduct);

export default router;
