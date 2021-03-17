const express = require('express');
const User = require('../models/User');
const router = express.Router();

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

router.get('/logout', async (req, res, next) => {
    try {
        req.logout();
        return res.status(200).render('login');
    } catch (err) {
        next(err);
    }
});

module.exports = router;