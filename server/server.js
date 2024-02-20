require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors')
const db = require('./db')

const port = process.env.PORT || 8000

app.use((req, res, next) => {
    req.db = db
    next()
})

const productRouters = require('./router/productRouters')

app.use('/products', productRouters)

// const mysql = require('mysql')
// const con = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME

// })
// con.connect((err) => {
//     if (err) throw err;
//     console.log("Connected!")
// });






app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}))

app.get('/', (req, res) => {
    res.json({ "message": "Here We GO  Again !" })
});



app.listen(port, () => console.log(`server started on port ${port} !`))