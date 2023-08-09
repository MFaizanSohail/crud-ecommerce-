const express = require("express");
const productRouter = express.Router();
const productController = require("../controller/productController");

productRouter.post("/create", productController.createProduct);
productRouter.get("/", productController.fetchProduct);
productRouter.get("/getUser/:id", productController.getProduct);
productRouter.put("/updateUser/:id", productController.updateProduct);
productRouter.delete("/userDelete/:id", productController.ProducDelete);

module.exports = productRouter;
