import express from "express";
import {
	getAllProducts,
	getOneProduct,
	createProduct,
	updateProduct,
	deleteProduct,
} from "../controllers/product.controller";

const router = express.Router();

router.get("/products", getAllProducts);

router.get("/products/:id", getOneProduct);

router.post("/new-product", createProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);

module.exports = router;
