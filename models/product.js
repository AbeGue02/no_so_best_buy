const { Schema } = require('mongoose')

const Product = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        brand: { type: [{ type: Schema.Types.ObjectId, ref: 'Brand' }], required: true },
        category: { type: [{ type: Schema.Types.ObjectId, ref: 'Category' }], required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true , default: 0 },
        image: { type: String, required: true },
        rate: { type: Number, required: true , min: 0, max: 5, default: 0},
    },
    { timestamps: true },
)

module.exports = Product