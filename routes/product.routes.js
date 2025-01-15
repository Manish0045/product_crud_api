const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const { findByCategory } = require("../models/product.model");

const router = require("express").Router();

router
    .get("/", getAllProducts)
    .get("/:id", getProductById)
    .post("/", createProduct)
    .put("/:id", updateProduct)
    .delete("/:id", deleteProduct)
    .get("/:categoryId", findByCategory)

module.exports = router;