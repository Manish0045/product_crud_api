const Product = require("../models/product.model");

const createProduct = (req, res) => {
    const data = req.body;
    Product.create(data, (err, result) => {
        if (err) {
            return res.status(500).json({ statusCode: 500, message: err.message });
        }
        res.status(201).json({
            statusCode: 201,
            message: "Product created successfully",
            data: result
        })
    })
};

const getAllProducts = (req, res) => {
    Product.findAll((err, result) => {
        if (err) {
            return res.status(500).json({ statusCode: 500, message: err.message });
        }
        res.status(200).json({
            statusCode: 200,
            message: "Products fetched successfully",
            result
        });
    });
};

const getProductById = (req, res) => {
    const { id } = req.params;
    Product.findById(id, (err, result) => {
        if (err) {
            return res.status(500).json({ statusCode: 500, message: err.message });
        }
        res.status(200).json({
            statusCode: 200,
            message: "Products fetched successfully",
            result
        });
    });
};

const updateProduct = (req, res) => {
    const { id } = req.params;
    const data = req.body;
    Product.update(id, data, (err, result) => {
        if (err) {
            return res.status(500).json({ statusCode: 500, message: err.message });
        }
        res.status(200).json({
            statusCode: 200,
            message: "Product updated successfully",
            data: result
        });
    });
};

const deleteProduct = (req, res) => {
    const { id } = req.params;
    Product.delete(id, (err, result) => {
        if (err) {
            return res.status(500).json({ statusCode: 500, message: err.message });
        }
        res.status(200).json({
            statusCode: 200,
            message: "Product deleted successfully",
            data: result
        });
    });
};


const findByCategory = (req, res) => {
    const { categoryId } = req.params;
    Product.findByCategory(categoryId, (err, result) => {
        if (err) {
            return res.status(500).json({ statusCode: 500, message: err.message });
        }
        res.status(200).json({
            statusCode: 200,
            message: "Products fetched successfully",
            result
        });
    });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    findByCategory
}