const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const CartItem = new Schema(
    {
        name: { type: String, required: true },
        product: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
        shoppingCart_id:[{ type: Schema.Types.ObjectId, ref: 'Shopping' }],
        quantify: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('cartItems', CartItem)