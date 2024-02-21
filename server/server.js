require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}));

// Serving static files 
app.use(express.static("public"))
app.use('/images', express.static(path.join(__dirname, 'images')));

// Import database 
const db = require('./db');
app.use((req, res, next) => {
    req.db = db;
    next();
});

// Routers 
const productRouters = require('./router/productRouters');
app.use('/', productRouters);

app.get('/', (req, res) => {
    res.json({ "message": "Here We GO  Again !" });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}!`);
});