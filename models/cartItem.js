const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const CartItem = new Schema(
    {
        cartItems: [{ type: Schema.Types.ObjectId, ref: 'CartItem' }],
        quantity: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports =  CartItem