const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const portConfig = require('./config/config')
const mongoose = require('mongoose')
const dbConfig = require('./config/database')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect(dbConfig.database.uri, dbConfig.database.options)

require('./routes')(app)

app.listen(portConfig.port, () => {
    console.log('Server is listening')
})