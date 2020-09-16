const Product = require('../models/Product')
module.exports = {
    async post(req, res) {
        try {
            const product = new Product(req.body)
            product.save(function (err) {
                console.log(err)
            })
        } catch (err) {
            res.status(500).send({
                error: 'Error while saving product'
            })
        }
    },
    async get(req, res) {

    }
}