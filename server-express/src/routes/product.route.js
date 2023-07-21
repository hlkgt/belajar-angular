const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller");

router.get("/", productController.getProducts);
router.get("/:id", productController.getProductDetail);
router.post("/", productController.postProduct);
router.patch("/update", productController.updateProduct);
router.delete("/delete/:id", productController.deleteProduct);

module.exports = router;
