const { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require("../controllers/category.controller");

const router = require("express").Router();

router
    .get("/", getAllCategories)
    .get("/:id", getCategoryById)
    .post("/", createCategory)
    .put("/:id", updateCategory)
    .delete("/:id", deleteCategory)

module.exports = router;