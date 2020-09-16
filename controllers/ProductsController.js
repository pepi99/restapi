const Product = require('../models/Product')
module.exports = {
    async getAll(req, res) {
        const products = await Product.find()
        res.send(products)
    },
    async post(req, res) {
        try {
            const product = new Product(req.body)
            product.save(function (err) {
                console.log(err)
            })
            res.send({
                message: 'Product saved',
                body: req.body
            })
        } catch (err) {
            res.status(500).send({
                error: 'Error while saving product'
            })
        }
    },
    async get(req, res) {
        try {
            const product = await Product.findOne({name: req.body.name})
            if (product)
                res.send(product)
            else
                res.send({
                    message: 'No such product'
                })
        } catch(err) {
            res.status(500).send({
                error: 'Error when getting product'
            })
        }
    },
    async delete(req, res) {
        try {
            await Product.deleteOne({name: req.body.name})
            res.send({
                message: 'Deleted product ' + req.body.name
            })
        } catch (err) {
            res.status(500).send({
                error: 'error while deleting product'
            })
        }
    },
    async patch(req, res) {
        try {
            console.log('Kur')
            await Product.findOneAndUpdate({name: req.body.name}, req.body)
            res.send({
                message: 'updated product'
            })
        } catch(err) {
            res.status(500).send({
                error: 'error while editing product'
            })
        }
    }
}