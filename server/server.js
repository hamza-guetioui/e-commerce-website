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



const Country = require('./models/Country');
const User = require('./models/User')
const sequelize = require('./utils/database');

// sequelize.sync().then((res) => {
//     console.log(res)
// }).catch(err => {
//     if (err) throw err
// })

// Import Routes
const ProductsRouter = require('./router/ProductsRouter');

// Routers 
app.use('/', ProductsRouter);


app.listen(port, async () => {
    console.log(`Server started on port ${port}!`);
});