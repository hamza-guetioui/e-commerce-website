const router = require('express').Router()
const Categories = require('../controllers/Categories')



router.route('/categories')
    .get(Categories.index)
    .post(Categories.store)

router.route('/Categories/:id')
    .post(Categories.update)
    .delete(Categories.destroy)

module.exports = router;