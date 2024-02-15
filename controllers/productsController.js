const { Product } = require('../models')

const getProducts = async (req, res) => {
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

        // Filter by rating
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

        const products = await Product.find(query).populate();
        res.json(products);
    } catch (error) {
        return res.status(500).send("An error has occured")
    }
}

const getProductById = async (req,res) => {
    try {
        const product = await Product.findById(req.params.id).populate()
        if (product) {
            res.json(product)
        }
    } catch (error) {
        return res.status(500).send('Collection with the specified ID does not exists');
    }
}

const createProduct = async (req,res) => {
    try {
        const product = await new Product(req.body)
        await product.save()
        return res.status(201).json({
            product,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        let { id } = req.params;
        let product = await Product.findByIdAndUpdate(id, req.body, { new: true })
        if (product) {
            return res.status(200).json(product)
        }
        throw new Error("Product not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Product deleted");
        }
        throw new Error("Product not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}