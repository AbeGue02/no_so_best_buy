
const { Product } = require('./models'); 

const productFilter = async (req, res) => {
    try {
        let query = {};

        // Filter by name
        if (req.query.name) {
            query.name = { $regex: req.query.name, $options: 'i' };
        }

        // Filter by price range
        if (req.query.priceMin && req.query.priceMax) {
            query.price = { $gte: req.query.priceMin, $lte: req.query.priceMax };
        } else if (req.query.priceMin) {
            query.price = { $gte: req.query.priceMin };
        } else if (req.query.priceMax) {
            query.price = { $lte: req.query.priceMax };
        }

        // Filter by rating.
        if (req.query.ratingMin) {
            query.rate = { $gte: parseInt(req.query.ratingMin), $lte: 5 };
        }

        // Filter by category
        if (req.query.category) {
            query.category = req.query.category;
        }
        
        // Filter by brand
        if (req.query.brand) {
            query.brand = req.query.brand;
        }
        const products = await Product.find(query);
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
       

module.exports = {
    productFilter

}