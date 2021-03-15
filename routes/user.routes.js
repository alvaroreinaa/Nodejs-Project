const express = require('express');
const passport = require('passport');
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
router.post('/register', async (req, res, next) => {
    try {
        passport.authenticate('register', (error, user) => {
            if (error) {
                return res.render('register', { error: error.message });
            }
    
            return res.redirect('/login');
        })(req);
    } catch (err) {
        next(err);
    }
});

module.exports = router;