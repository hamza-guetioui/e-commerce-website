require('dotenv').config();

const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

// Serving static files 
app.use(express.static("public"))
app.use('/images', express.static(path.join('public', 'images')));


// Import database 
// sequelize.sync().then((res) => {
//     console.log(res)
// }).catch(err => {
//     if (err) throw err
// })

const Category = require('./models/Category');
const User = require('./models/User')
const sequelize = require('./utils/database');




app.get('/catg', async (req, res) => {
    try {
        const data = await Category.findAll({ attributes: ["id", "category_name"], order: ['id'], raw: true })
        console.log(data);
        res.json(data)

    } catch (err) {
        if (err) throw err
    }
})
// Routers 
const productRouters = require('./router/productsRouter');
app.use('/', productRouters);


app.listen(port, async () => {
    console.log(`Server started on port ${port}!`);
});