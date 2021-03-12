const mongoose = require('mongoose');
const DB_URL  = 'mongodb://localhost:27017/ecommerce';

mongoose.connect(DB_URL, {
    useNewUrlParsert: true,
    useUnifiedTopology: true,
});