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

// const User = require('./models/user')

// Import database 
const Category = require('./models/Category');
const User = require('./models/User')
const sequelize = require('./utils/database');

sequelize.sync().then((res) => {
    console.log(res)
}).catch(err => {
    if (err) throw err
})


app.get('/catg', async (req, res) => {
    try {
        const data = await Category.findAll()
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