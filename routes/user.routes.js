const express = require('express');
const passport = require('passport');
const router = express.Router();

// Show the login form
router.get('/login', async (req, res, next) => {
    try {
        return res.status(200).render('login');
    } catch (err) {
        next(err);
    }
});

// Login the user
router.post('/login', async (req, res, next) => {
    try {  
        passport.authenticate('login', (error, user) => {
            if (error) {
                return res.render('login', { error: error.message });
            }                 
            
            req.login(user._id,() => {
                return res.redirect('/products/1');
            });
            
        })(req);
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

// Register the new user
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
