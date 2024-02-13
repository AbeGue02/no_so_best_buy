
const CartItem = require('./models');


const userId = 'user_id_here';

CartItem.find({ user: userId })
    .populate('product')
    .exec()
    .then(cartItems => {
        cartItems.forEach(cartItem => {
            console.log('Product:', cartItem.product.name);
            console.log('Quantity:', cartItem.quantity);
            console.log('Price:', cartItem.product.price);
            console.log('Total:', cartItem.product.price * cartItem.quantity);
            console.log('-----------------------');
        });
    })
    .catch(err => {
        console.error('Error fetching cart items:', err);
    });
