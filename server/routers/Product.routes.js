const router = require('express').Router()
const Products = require('../controllers/Products.controller')

router.route('/')
    .get(Products.index)
    .post(Products.store);
router.route('/:id')
    .get(Products.show)
    .put(Products.update)
    .delete(Products.destroy);

module.exports = router