require('dotenv').config();

const path = require('node:path');
const fs = require('node:fs/promises');
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


const Product = require('./models/Product')
const ProductItem = require('./models/ProductItem')
const {Category} = require('./models/Category');
const { CategoriesRelation } = require('./models/Category');
const Color = require('./models/Color');
const Size = require('./models/Size');
const Image = require('./models/Image')

// const ProductItems = require('./models/ProductItems')
const sequelize = require('./utils/database');

sequelize.sync({ alter: true }).then((res) => {
    console.log("done")
}).catch(err => {
    if (err) throw err
})

// Import Routes
const ProductsRouter = require('./router/ProductsRouter');

// Routers 
app.use('/', ProductsRouter);


app.listen(port, async () => {
    console.log(`Server started on port ${port}!`);
});