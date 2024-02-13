const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const ShoppingCart = new Schema(
    {
        total_price: { type: Number, required: true },
        user_id: [{ type: Schema.Types.ObjectId, ref: 'User' }],

    },
    { timestamps: true },
)

module.exports = mongoose.model('shoppingCarts', ShoppingCart)