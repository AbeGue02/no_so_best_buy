const { Brand } = require('../models')

const getBrands = async (req, res) => {
    try {
        const brands = await Brand.find().populate()
        res.json(brands)
    } catch (error) {
        return res.status(500).send("An error has occured")
    }
}

const getBrandById = async (req,res) => {
    try {
        const brand = await Brand.findById(req.params.id).populate()
        if (brand) {
            res.json(brand)
        }
    } catch (error) {
        return res.status(500).send('Collection with the specified ID does not exists');
    }
}

const createBrand = async (req,res) => {
    try {
        const brand = await new Brand(req.body)
        await brand.save()
        return res.status(201).json({
            brand,
        })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateBrand = async (req, res) => {
    try {
        let { id } = req.params;
        let brand = await Brand.findByIdAndUpdate(id, req.body, { new: true })
        if (brand) {
            return res.status(200).json(brand)
        }
        throw new Error("Brand not found")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteBrand = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Brand.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Brand deleted");
        }
        throw new Error("Brand not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getBrands,
    getBrandById,
    createBrand,
    updateBrand,
    deleteBrand
}