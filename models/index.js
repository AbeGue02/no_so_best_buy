const mongoose = require('mongoose')
const BrandSchema = require('./brand')
const CartItemSchema = require('./cartItem')
const CategorySchema = require('./category')
const ProductSchema = require('./ingredient')
const ShoppingCartSchema = require('./shoppingCart')
const UserSchema = require('./user')

//we can give them any name we want, but like so much else in JS, it would be counterintuitive to not give it a semantic, recognizable name
const Brand  = mongoose.model('Brand', BrandSchema )
const CartItem = mongoose.model('CartItem', CartItemSchema)
const Category = mongoose.model('Category', CategorySchema)
const Product = mongoose.model('Product', ProductSchema)
const ShoppingCart = mongoose.model('ShoppingCart', ShoppingCartSchema)
const User = mongoose.model('User', UserSchema)


module.exports = {
    Brand,
    CartItem,
    Category,
    Product, 
    ShoppingCart,
    User
}