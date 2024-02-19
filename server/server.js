require('dotenv').config()
const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8000

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.json({ "message": "Here We GO  Again !" })
});



app.listen(port, () => console.log(`server started on port ${port} !`))