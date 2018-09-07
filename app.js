const express  = require('express')
const mongoose = require('mongoose');
const cors     = require('cors')
const routes   = require('./routes')
require('dotenv').config()

const app  = express()
const port = 3000
const db   = mongoose.connection;

app.use(cors())

mongoose.connect('mongodb://localhost:27017/musicApp')
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('mongo connected')
})

app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use('/', routes)

app.listen(port, () => [
    console.log('Listening on port ',port)
])