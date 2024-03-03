const router = require('express').Router()
const Categories = require('../controllers/Categories')



router.route('/')
    .get(Categories.index)
    .post(Categories.store)

router.route('/:id')
    .post(Categories.update)
    .delete(Categories.destroy)

module.exports = router;