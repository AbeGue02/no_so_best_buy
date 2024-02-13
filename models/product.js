const { Schema } = require('mongoose')

const Product = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        brand: { type: [{ type: Schema.Types.ObjectId, ref: 'Brand' }], required: true },
        category: { type: [{ type: Schema.Types.ObjectId, ref: 'Category' }], required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        rate: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = Product