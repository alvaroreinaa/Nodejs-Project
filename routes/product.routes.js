const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Show the products
router.get('/products/:page', async (req, res, next) => {
    try {
        const products = await Product.find().limit(10);
        return res.status(200).render('products', { products });
    } catch (err) {
        next(err);
    }
});

// Show a product in detail
router.get('/product/:id', async (req, res, next) => {
    const id = req.params.id;

    try {
        const product = await Product.findById(id);
        
        if (product) {
            return res.status(200).render('product', { product });
        } else {
            return res.status(404).json('No product found by this id');
        }
    } catch (err) {
        next(err);
    }
});

// Show the products filter by name
router.get('products/:name', async (req, res, next) => {

});

// Show the products filter by price
router.get('products/:lowerPrice/:higherPrice', async (req, res, next) => {

});

module.exports = router;