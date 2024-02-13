const mongoose = require('mongoose')
const  { Schema } = require('mongoose')


const Product = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        brand: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Brand' }],
        category: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        rate: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('products', Product)