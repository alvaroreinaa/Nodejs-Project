const mongoose = require('mongoose');

// Import the models
const Product = require('./models/Product');
const User = require('./models/User');

// Import the objects that contains the data
const products = require('./seeds/products');
const users = require('./seeds/users');

// Instantiate each object of our array in the model
const productsDocuments = products.map(product => new Product(product));
const usersDocuments = users.map(user => new User(user));

// Connect to the database to perform the necessary actions
mongoose.connect(process.env.DB_URL || 'mongodb://localhost:27017/ecommerce', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    // Obtain the existing products and users from the database
    const allProducts = await Product.find();
    const allUsers = await User.find();

    // If exists, drop the collection
    if (allProducts.length && allUsers.length) {
        await Product.collection.drop();
        await User.collection.drop();
    }
}).catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    // Fill the database with the new array
    await Product.insertMany(productsDocuments);
    await User.insertMany(usersDocuments);
}).catch((err) => console.log(`Error creating data: ${err}`))
  // Disconnect from the database
  .finally(() => mongoose.disconnect());