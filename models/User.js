const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        type: { type: String, required: true },
        name: { type: String, required: true },
        surname: { type: String,  required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        cart: [{ type: mongoose.Types.ObjectId, ref: 'Product'}], 
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);
module.exports = User;
