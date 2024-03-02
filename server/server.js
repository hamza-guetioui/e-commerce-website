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

// const Customer = require('./models/Customer')
// const Address = require('./models/Address')
// const City = require('./models/City')
// const PaymentMethod = require('./models/PaymentMethod')


// const Product = require('./models/Product')
// const Category = require('./models/Category');
// const Promostion = require('./models/Promotion')
// const Color = require('./models/Color');
// const Size = require('./models/Size');
// const Image = require('./models/Image')
// const ProductItem = require('./models/ProductItem')

// const ShoppingCard = require('./models/ShoppingCard')
// const WishList = require('./models/Whishlist')

// const Order = require('./models/Order')
// const OrderItem = require('./models/OrderItem')

const sequelize = require('./utils/database')
sequelize.sync({ alter: true })
    .then(() => {
        console.log('done')
    })
    .catch((err) => {
        if (err) throw err
    })
// Import Routes
const ProductsRouter = require('./routers/ProductsRouter');

// Routers 
app.use('/', ProductsRouter);

app.listen(port, async () => {
    console.log(`Server started on port ${port}!`);
});



// npm install http2-express-bridge

// const http2Express = require('http2-express-bridge')
// const http2 = require('http2')
// const { readFileSync } = require('fs')
// const app = http2Express(express)

// const options = {
//   key: readFileSync('<Certificate Key>'),
//   cert: readFileSync('<Certificate file>'),
//   allowHTTP1: true
// }
// const server = http2.createSecureServer(options, app)
// server.listen(port)