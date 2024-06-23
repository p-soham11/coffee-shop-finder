/** @format */

const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/listProduct", productController.getProducts);
router.get("/product/:id", productController.getProductById);
router.post("/createProduct", productController.createProduct);
router.put("/updateProduct/:id", productController.updateProduct);
router.delete("/delProduct/:id", productController.deleteProduct);

module.exports = router;
