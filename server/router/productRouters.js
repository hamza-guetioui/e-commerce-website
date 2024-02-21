const express = require('express')
const router = express.Router()

const { getCategories,
    getAllProducts,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    productImage
} = require('../controller/productController');

router.get('/products/categories', getCategories);
router.get('/products/image', productImage)

router.get('/products', getAllProducts);

router.post('/products/create', addProduct);

router.route('/products/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct);




//add a middleware to check if the product exists before adding or updating it  
// function validateProductId(req, res, next) {
//     const productId = req.id
// }




module.exports = router

