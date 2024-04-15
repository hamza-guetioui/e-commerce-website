require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const port = process.env.PORT;

const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

// const Panel = require("./models/Panel.model")

// Color.sync({ alter: true })

// App Middlewares
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Import Routes
const categoryRouters = require('./routers/Category.routes');
const productRouters = require('./routers/Product.routes');
const imageRouters = require('./routers/Image.routes')
const panelRouters = require('./routers/Panel.routes');
const { Sequelize } = require('sequelize');

// Routers 
app.use('/categories', categoryRouters);
app.use('/products', productRouters);
app.use('/images', imageRouters);
app.use('/panels', panelRouters);




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