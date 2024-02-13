const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const ShoppingCart = new Schema(
    {
        total_price: { type: Number, required: true },
        user: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        products: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],

    },
    { timestamps: true },
)

module.exports =  ShoppingCart