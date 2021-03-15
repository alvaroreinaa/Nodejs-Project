const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Show the login form
router.get('/login', async (req, res, next) => {
    try {
        return res.status(200).render('login');
    } catch (err) {
        next(err);
    }
});


// Show the login form
router.get('/register', async (req, res, next) => {
    try {
        return res.status(200).render('register');
    } catch (err) {
        next(err);
    }
});

// Register the users
router.post('/register_user', async (req, res, next) => {
    try {
        const newUser = new User({
            type: 'client',
            name: req.body.name,
            surname: req.body.surname,
            email: req.body.email,
            password: req.body.password,
        })

        const createdUser = await newUser.save();
        return res.status(200).redirect("/login");
    } catch (err) {
        next(err);
    }
});

module.exports = router;