const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Product = new Schema({
    name: String,
    category: String,
    price: Number
})

Product.plugin(AutoIncrement, {inc_field: 'id'})
module.exports = mongoose.model('Product', Product)

