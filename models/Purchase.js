const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema(
    {
        userId: { type: String, required: true },
        totalPrice: { type: Number, required: true },
        products: [{ type: mongoose.Types.ObjectId, ref : 'Product'}],
    },
    {
        timestamps: true,
    }
);

const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase;
