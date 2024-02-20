const express = require('express')
const router = express.Router()

const { getCategories } = require('../controller/productController');


router.get('/categories', getCategories)

router.get('/', (req, res) => res.send('Hello World!'))



module.exports = router

