const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const router = require('./routes/posts.js')

const app = express()

dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors(
    {
        credentials: true
    }
));

app.use(express.json())

app.use('/posts', router)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT}`))

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((error) => console.log(error))

// mongoose.set('useFindAndModify', false)