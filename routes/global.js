const router = require("express").Router();

router
    .use('/v1/products', require("./product.routes"))
    .use('/v1/category', require("./category.routes"))

module.exports = router;