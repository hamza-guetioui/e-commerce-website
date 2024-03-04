const router = require('express').Router()
const products = require('../controllers/Products')

router.route('/')
    .get(products.index)
    .post(products.store);
router.route('/:id')
    .get(products.show)
    .put(products.update)
    .delete(products.destroy);

module.exports = router