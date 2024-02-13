const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const CartItem = new Schema(
    {
        name: { type: String, required: true },
        product: { type: [{ type: Schema.Types.ObjectId, ref: 'Product' }], required: true },
        shoppingCart_id: { type: [{ type: Schema.Types.ObjectId, ref: 'Shopping' }], required: true },
        quantify: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = CartItem