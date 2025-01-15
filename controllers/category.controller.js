const Category = require("../models/category.model");

const createCategory = (req, res) => {
    const data = req.body.name;
    console.group(data);
    Category.create(data, (err, result) => {
        if (err) {
            return res.status(500).json({ statusCode: 500, message: err.message });
        }
        res.status(201).json({
            statusCode: 201,
            message: "Category created successfully",
            data: result
        });
    });
};

const getAllCategories = (req, res) => {
    Category.findAll((err, result) => {
        if (err) {
            return res.status(500).json({ statusCode: 500, message: err.message });
        }
        res.status(200).json({
            statusCode: 200,
            message: "Categories fetched successfully",
            result
        });
    });
};

const getCategoryById = (req, res) => {
    const { id } = req.params;
    Category.findById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ statusCode: 500, message: err.message });
        }
        res.status(200).json({
            statusCode: 200,
            message: "Category fetched successfully",
            result
        });
    });
};

const updateCategory = (req, res) => {
    console.log(req.query);
    console.log(req.params);
    console.log(req.url);
    const { id } = req.params;
    const data = req.body.name;
    console.group(data);
    Category.update(id, data, (err, result) => {
        if (err) {
            return res.status(500).json({ statusCode: 500, message: err.message });
        }
        res.status(200).json({
            statusCode: 200,
            message: "Category updated successfully",
            data: result
        });
    });
};

const deleteCategory = (req, res) => {
    const { id } = req.params;
    Category.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ statusCode: 500, message: err.message });
        }
        res.status(200).json({
            statusCode: 200,
            message: "Category deleted successfully",
            data: result
        });
    });
};

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory,
    deleteCategory
};
