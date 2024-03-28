const router = require('express').Router()
// const Panel = require('../controllers/Panel.controller')


router.post('/', (req, res) => {
    const data = req.body
    console.log(data)
    res.send(data)
})


module.exports = router