const router = require('express').Router()

// const { Category } = require('../models')
const Products = require('../controllers/Products');


// router.get('/products/categories', getCategories);
router.get('/products/image', Products.productImage)

router.get('/products', Products.getAllProducts);

router.post('/products/create', Products.addProduct);

router.route('/products/:id')
    .get(Products.getProductById)
    .put(Products.updateProduct)
    .delete(Products.deleteProduct);




//add a middleware to check if the product exists before adding or updating it  
// function validateProductId(req, res, next) {
//     const productId = req.id
// }




module.exports = router

