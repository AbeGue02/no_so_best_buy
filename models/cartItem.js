const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const CartItem = new Schema(
    {
        product: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
        quantity: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports =  CartItem