const Product = require('../models/Product.model')
const ProductItem = require('../models/ProductItem.model')



async function index(req, res) {
    try {
        const products = await Product.findAll({
            attributes: ['id', 'name', 'description', 'image'],
            include: [
                {
                    model: ProductItem,
                    attributes: ["price"]
                }
            ]
        });

        res.status(200).json({
            status: "success",
            message: "Retrieved categories successfully",
            data: products
        });

    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.toString(),
            data: null
        })
    }
}

async function store(req, res) {
    try {
        const products = await Product.create({});
        res.status(200).json({
            status: "success",
            message: "Retrieved categories successfully",
            data: products
        });

    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.toString(),
            data: null
        })
    }
}

async function show(req, res) {
    try {
        const products = await Product.findAll();
        res.status(200).json({
            status: "success",
            message: "Retrieved categories successfully",
            data: products
        });

    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.toString(),
            data: null
        })
    }
}

async function update(req, res) {
    try {
        const products = await Product.findAll();
        res.status(200).json({
            status: "success",
            message: "Retrieved categories successfully",
            data: products
        });

    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.toString(),
            data: null
        })
    }
}

async function destroy(req, res) {
    try {
        const products = await Product.findAll();
        res.status(200).json({
            status: "success",
            message: "Retrieved categories successfully",
            data: products
        });

    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.toString(),
            data: null
        })
    }
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy,
};
