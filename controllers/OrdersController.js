const Order = require('../models/Order')
const DateUtil = require('../util/DateUtil')
const OrderUtil = require('../util/OrderUtil')
module.exports = {
    async getOrders(req, res) {
        let orders = await Order.find()
        console.log(orders)
        orders.forEach(function (part, index, theArray) {
            theArray[index] = OrderUtil.parseOrder(theArray[index])
        })
        res.send(orders)
    },
    async post(req, res) {
        try {
            let data = req.body
            data.date = DateUtil.getDate()

            const order = new Order(data)
            order.save(function (err) {
                if (err)
                    console.log(err)
            })
            const resBody = OrderUtil.parseOrder(order)

            res.send({
                message: 'Order saved',
                body: resBody
            })
        } catch (err) {
            res.status(500).send({
                error: 'Error while saving order'
            })
        }
    },
    async patch(req, res) {
        try {
            await Order.findOneAndUpdate({idOrder: req.params.orderId}, {$set: {status: req.body.status}})
            res.send({
                message: 'updated order'
            })
        } catch (err) {
            res.status(500).send({
                error: 'error while editing order'
            })
        }
    }
}