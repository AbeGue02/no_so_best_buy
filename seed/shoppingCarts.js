const ShoppingCart = require('../models/shoppingCart');


const userId = 'user_id_here';


ShoppingCart.findOne({ user: userId })
    .populate('items')
    .exec()
    .then(cart => {
        if (!cart) {
            console.log('Shopping cart is empty');
            return;
        }
        console.log('User:', cart.user);
        console.log('Items in cart:');
        cart.items.forEach(item => {
            console.log('- Product:', item.product.name);
            console.log('  Quantity:', item.quantity);
            console.log('  Price:', item.product.price);
            console.log('  Total:', item.product.price * item.quantity);
            console.log('-----------------------');
        });
    })
    .catch(err => {
        console.error('Error fetching shopping cart:', err);
    });