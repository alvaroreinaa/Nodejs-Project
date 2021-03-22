const express = require('express');
const User = require('../models/User');
const Purchase = require('../models/Purchase')
const router = express.Router();

// Show the user's cart
router.get('/cart', async (req, res, next) => {
    try {
        const userId = req.user;
        const user = await User.findById(userId).populate('cart');
        const userCart = user.cart;
        return res.status(200).render('cart', { userCart });
    } catch (err) {
        next(err);
    }
});

// Add a product to the users's cart
router.put('/add-product/:productId', async (req, res, next) => {
    try {
        const userId = req.user;
        const productId = req.params.productId;
        
        const updatedCart = await User.findByIdAndUpdate(
            userId,
            { $push: { cart: productId } },
            { new: true}
        );

        return res.status(200).json(updatedCart);        
    } catch (err) {
        next(err);
    }
});

// Buy the products in the user's cart
router.post('/purchase', async (req, res, next) => {
    try {
        const userId = req.user;
        const user = await User.findById(userId).populate('cart');
        const userCart = user.cart;
        var totalPrice = 0;

        for (let index = 0; index < userCart.length; index++) {
            totalPrice += userCart[index].price;
        }
         
        const newPurchase = new Purchase({
            userId: userId,
            totalPrice: totalPrice,
            products: userCart,
        });

        const savedPurchase = await newPurchase.save();

        user.cart = undefined;
        await user.save();

        return res.status(200).json(savedPurchase);      
    } catch (err) {
        next(err);
    }
});

// Logout the user
router.get('/logout', async (req, res, next) => {
    try {
        req.logout();
        req.session(() => {
            res.clearCookie('connect.sid');
        })
        return res.status(200).render('login');
    } catch (err) {
        next(err);
    }
});

module.exports = router;
