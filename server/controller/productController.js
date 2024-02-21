const fs = require('fs');
const path = require('path');
const db = require("../db");
const { query } = require('express');

const getCategories = async (req, res) => {
    try {
        const sqlResult = await req.db.query(`
        SELECT 
            c.category_name as parent_category, 
            GROUP_CONCAT(CONCAT(cc.id, '-', cc.category_name) SEPARATOR ',') as child_categories 
        FROM 
            category c 
            JOIN category_relation cr ON c.id = cr.fk_parent_category_id 
            JOIN category cc ON cr.fk_child_category_id = cc.id 
        GROUP BY 
            cr.fk_parent_category_id
    `);

        // map the data and generate an API
        const categories = sqlResult[0].map(item => {
            const parentCategory = item.parent_category;
            const childCategories = item.child_categories.split(',').map(child => {
                const [id, name] = child.split('-');
                return { id: parseInt(id), name };
            });

            return { parent_category: parentCategory, child_categories: childCategories };
        });
        console.log(categories)
        res.status(200).json(categories);

    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }

};
const getAllProducts = async (req, res) => {
    try {
        const sqlResult = await req.db.query(`
        SELECT p.id,p.name,p.description ,p.image ,pi.price FROM product p
        join product_item pi on(p.id = pi.fk_product_id )
        `)
        res.json(sqlResult[0])

    } catch (err) {
        if (err) throw err
    }
}

const addProduct = async (req, res) => {

};

const getProductById = async (req, res) => {

};

const updateProduct = async (req, res) => {

};

const deleteProduct = async (req, res) => {

};

const productImage = (req, res) => {
    const imageSrc = req.query.imageSrc
    const imagePath = path.resolve('public/images', imageSrc)
    if (fs.existsSync(imagePath)) {
        res.sendFile(imagePath);
    } else {
        res.status(404).send("Image not found");
    }
}

module.exports = {
    getCategories,
    getAllProducts,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    productImage
};
