const router = require('express').Router()
const Panel = require('../controllers/Panels.controller')

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

router.route('/')
    .get(Panel.index)
    .post(upload.single('image'), Panel.store)

router.route('/:id')
    .put(upload.single('image'), Panel.update)
    .delete(Panel.destroy)



module.exports = router