const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Product = new Schema({
    name: String,
    category: String,
    price: Number
})

Product.plugin(AutoIncrement, {inc_field: 'id'}) // Increase id of each next product.
module.exports = mongoose.model('Product', Product)

