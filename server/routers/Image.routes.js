const router = require('express').Router()
const Image = require('../controllers/Images.controller')


router.get('/', Image.index)


module.exports = router