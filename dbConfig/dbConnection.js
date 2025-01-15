const mysql = require("mysql2");

const connectionInstance = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connectionInstance.connect((err) => {
    if (err) throw new Error("Error while connecting to database");
    console.log("Database connected successfully!");
});

module.exports = connectionInstance;