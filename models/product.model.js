const db = require("../dbConfig/dbConnection");

const Product = {
    findAll: (callback) => {
        db.query("SELECT * FROM products", callback);
    },
    findById: (id, callback) => {
        db.query("SELECT * FROM products WHERE id = ?", [id], callback);
    },
    create: (data, callback) => {
        const query = "INSERT INTO products (name, description, price, category_id) VALUES (?, ?, ?, ?)";
        db.query(query, [data.name, data.description, data.price, data.category_id], callback);
    },
    update: (id, data, callback) => {
        const query = "UPDATE products SET name = ?, description = ?, price = ?, category_id = ? WHERE id = ?";
        db.query(query, [data.name, data.description, data.price, data.category_id, id], callback);
    },
    delete: (id, callback) => {
        db.query("DELETE FROM products WHERE id = ?", [id], callback);
    },
    findByCategory: (categoryId, callback) => {
        db.query("SELECT * FROM products WHERE category_id = ?", [categoryId], callback);
    }
};

module.exports = Product;