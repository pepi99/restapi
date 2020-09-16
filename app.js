const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const portConfig = require('./config/config')
const mongoose = require('mongoose')
const dbConfig = require('./config/database')

const app = express()
app.use(cors())
app.use(morgan('combined'))

mongoose.connect(dbConfig.database.uri, dbConfig.database.options)

require('./routes')(app)

app.listen(portConfig.port, () => {
    console.log('Server is listening')
})