require('dotenv').config();
require('./db.js');
require('./passport');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())

const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
app.use(cookieParser());
app.use(session({ 
    secret: process.env.SESSION_SECRET || 'keyboard cat', 
    resave: false, 
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

const authMiddleware = require('./middlewares/auth.middleware');
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const cartRoutes = require('./routes/cart.routes');

app.use('/', productRoutes);
app.use('/', userRoutes);
app.use('/', [authMiddleware.isAuthenticated], cartRoutes);

app.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    return res.status(err.status || 500).render('error',{ 
        message: err.message || 'Unexpected error',
        status: err.status || 500,
    });
});

app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}/products/1`);
});
