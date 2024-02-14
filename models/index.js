const mongoose = require('mongoose')

const brandSchema = require('./brand')
const cartItemSchema = require('./cartItem')
const categorySchema = require('./category')
const productSchema = require('./product')
const shoppingCartSchema = require('./shoppingCart')
const userSchema = require('./user')

const Brand  = mongoose.model('Brand', brandSchema )
const CartItem = mongoose.model('CartItem', cartItemSchema)
const Category = mongoose.model('Category', categorySchema)
const Product = mongoose.model('Product', productSchema)
const ShoppingCart = mongoose.model('ShoppingCart', shoppingCartSchema)
const User = mongoose.model('User', userSchema)

module.exports = {
    Brand,
    CartItem,
    Category,
    Product, 
    ShoppingCart,
    User
}