const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const Product = new Schema({
    name: String,
    category: String,
    price: Number
})

module.exports = mongoose.model('Product', Product)