const router = require('express').Router()
const Categories = require('../controllers/Categories')


// Middlewares
const {
    validateCategoryId,
    validateCategoryName,
} = require('../middlewares/categoryValidationMiddleware')



router.route('/')
    .get(Categories.index)
    .post(validateCategoryName, Categories.store)

router.route('/:id')
    .all(validateCategoryId)
    .put(validateCategoryName, Categories.update)
    .delete(Categories.destroy)

module.exports = router;