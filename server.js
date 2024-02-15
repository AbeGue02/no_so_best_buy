
const { getShoppingCartUser } = require('./controllers/shoppingCartController');






app.get('/users/:id/shopping-cart', getShoppingCartUser);