const mongoose = require('mongoose')
const Schema = mongoose.Schema
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Order = new Schema({
    date: String,
    products: Array,
    status: String
})

Order.plugin(AutoIncrement, {inc_field: 'idOrder'}) // Increase id of each next order.
module.exports = mongoose.model('Order', Order)

