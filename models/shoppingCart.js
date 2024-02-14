const { Schema } = require('mongoose')

const ShoppingCart = new Schema(
    {
        total_price: { type: Number, required: true , default: 0 },
        user: { type: [{ type: Schema.Types.ObjectId, ref: 'User' }], required: true },
        products: { type: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }], required: true },
    },
    { timestamps: true },
)

module.exports = ShoppingCart