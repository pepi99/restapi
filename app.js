const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const portConfig = require('./config/config')
const mongoose = require('mongoose')
const dbConfig = require('./config/database')
const bodyParser = require('body-parser')
const app = express()
const cookieParser = require('cookie-parser')
const prepopulator = require('./prepopulator')

app.use(cookieParser())
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect(dbConfig.database.uri, dbConfig.database.options)

require('./routes')(app)

prepopulator.prepopulate().then() // just not to ignore Promise

app.listen(portConfig.port, () => {
    console.log('Server is listening')
})