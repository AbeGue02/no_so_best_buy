
const express = require('express');
const db = require('./db');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('./controllers/productsController');
const { getBrands, getBrandById, createBrand, updateBrand, deleteBrand } = require('./controllers/brandController');
const { getCartItems, getCartItemById, createCartItem, updateCartItem, deleteCartItem } = require('./controllers/cartItemController');
const { getShoppingCarts, getShoppingCartById, createShoppingCart, updateShoppingCart, deleteShoppingCart, getShoppingCartUser } = require('./controllers/shoppingCartController');
const { getUsers, getUserById, createUser, updateUser, deleteUser } = require('./controllers/userController');
const { getCategories, getCategoryById, createCategory, updateCategory, deleteCategory } = require('./controllers/categoryController');


const PORT = process.env.PORT || 3001;
const app = express();

//middleware here
app.use(cors()) //Necessary for some HTTP methods while working on local network
app.use(bodyParser.json()) //Allows you to use the body of requests
app.use(logger('dev')) //Better logs

//Set up and homepage
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', async (req,res) => {
    res.send("Welcome to my Not So Best Buy!")
})

app.get('/products', getProducts)
app.post('/products/create', createProduct)
app.get('/products/:id', getProductById)
app.put('/products/:id/update', updateProduct)
app.delete('/products/:id/delete', deleteProduct)

app.get('/brands', getBrands)
app.post('/brands/create', createBrand)
app.get('/brands/:id', getBrandById)
app.put('/brands/:id/update', updateBrand)
app.delete('/brands/:id/delete', deleteBrand)

app.get('/shoppingCarts', getShoppingCarts)
app.post('/shoppingCarts/create', createShoppingCart)
app.get('/shoppingCarts/:id', getShoppingCartById)
app.put('/shoppingCarts/:id/update', updateShoppingCart)
app.delete('/shoppingCarts/:id/delete', deleteShoppingCart)

app.get('/categories', getCategories)
app.post('/categories/create', createCategory)
app.get('/categories/:id', getCategoryById)
app.put('/categories/:id/update', updateCategory)
app.delete('/categories/:id/delete', deleteCategory)

app.get('/cartItems', getCartItems)
app.post('/cartItems/create', createCartItem)
app.get('/cartItems/:id', getCartItemById)
app.put('/cartItems/:id/update', updateCartItem)
app.delete('/cartItems/:id/delete', deleteCartItem)

app.get('/users', getUsers)
app.post('/users/create', createUser)
app.get('/users/:id', getUserById)
app.get('/users/:id/shopping-cart', getShoppingCartUser);
app.put('/users/:id/update', updateUser)
app.delete('/users/:id/delete', deleteUser)

// Handle 404 errors
app.get('/*', async (req,res) => {
    res.send('An error has occurred. Try again later (404)')
})
