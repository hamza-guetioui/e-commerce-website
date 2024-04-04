const router = require('express').Router()
const path = require('node:path');

// const Panel = require('../controllers/Panel.controller')
const multer = require('multer')
// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/'); // Destination 
    },
    // filename: function (req, file, cb) {
    //     cb(null, Date.now() + path.extname(file.originalname)); // Append current timestamp to the filename to make it unique
    // }
});
const upload = multer({ storage: storage });

router.post('/', upload.single('image'), (req, res) => {
    const data = req.body.data
    console.log(req.file)
    console.log(req.body)
    res.send(data)
})


module.exports = router