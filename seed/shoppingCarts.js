
const { User,ShoppingCart} = require('./models');

const createShoppingCartsForUsers = async () => {
    try {
        // Find all users
        const users = await User.find({});

        // Iterate through each user and create a shopping cart
        for (const user of users) {
            const shoppingCart = new ShoppingCart({ user: user._id, items: [] });
            await shoppingCart.save();
            console.log(`Shopping cart created for user: ${user._id}`);
        }

        console.log('Shopping carts created successfully for all users');
    } catch (err) {
        console.error('Error creating shopping carts:', err);
    }
};

createShoppingCartsForUsers();