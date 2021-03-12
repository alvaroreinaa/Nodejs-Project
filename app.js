require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

const productRoutes = require('./routes/product.routes');

const PORT = process.env.PORT || 3000;
require('./db.js');

app.use('/', productRoutes);

app.use('*', (req, res, next) => {
    const error = new Error('Route not found');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message ||'Unexpected error');
})

app.listen(PORT, () => {
    console.log(`Listening in http://localhost:${PORT}/products/1`);
})