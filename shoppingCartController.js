const { ShoppingCart } = require('../models');

const getShoppingCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const shoppingCart = await ShoppingCart.findOne({ user: userId });

    if (!shoppingCart) {
      return res.status(404).json({ message: 'Shopping cart not found' });
    }

    res.json(shoppingCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getShoppingCart,
};