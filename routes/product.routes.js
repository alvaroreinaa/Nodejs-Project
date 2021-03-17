const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Show the products
router.get('/products/:page', async (req, res, next) => {
    const resultsPerPage = 10;
    let page = req.params.page >= 1 ? req.params.page : 1;
    let pagesToSkip = page - 1;
    
    try {
        const products = await Product.find().limit(resultsPerPage).skip(resultsPerPage * pagesToSkip);
        return res.status(200).render('products', { products , productsList: true });
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
router.get('/searched_products/:name', async (req, res, next) => {
    const name = req.params.name;

    try {
        const products = await Product.find({ name: new RegExp('\\b' + name + '\\b', 'i'), name: { $regex: name, $options: "i"} });

        if (products) {
            return res.status(200).render('products', { products, name : name, productsSearchByName: true });
        } else {
            return res.status(404).json('No product found by this name');
        }
    } catch (err) {
        next(err);
    }
});

// Show the products filter by price
router.get('/searched_products/:lowerPrice/:higherPrice', async (req, res, next) => {
    const lowerPrice = req.params.lowerPrice;
    const higherPrice = req.params.higherPrice;

    try {
        const products = await Product.find({ price: { $gte: lowerPrice, $lte: higherPrice}})

        if (products) {
            return res.status(200).render('products', { products , lowerPrice: lowerPrice, higherPrice: higherPrice, productsSearchByPrice: true});
        } else {
            return res.status(404).json('No product found by this price range');
        }
    } catch (err) {
        next(err)
    }
});

module.exports = router;