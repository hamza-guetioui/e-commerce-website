require('dotenv').config();

const path = require('node:path');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT;

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

// App Middlewares
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Import Routes
const categoryRouters = require('./routers/Category.routes');
const productRouters = require('./routers/Product.routes');

// Routers 
app.use('/categories', categoryRouters);
app.use('/products', productRouters);

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