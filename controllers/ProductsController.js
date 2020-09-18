const Product = require('../models/Product')
const ProductUtil = require('../util/ProductUtil')
const VATUtil = require('../util/VATUtil')
const request = require('request');
module.exports = {
    async getAll(req, res) {
        let originalRes = res
        request('https://euvatrates.com/rates.json', {json: true}, (err, res, body) => {
            if (err) {
                res.status(503).send({
                    error: 'Can not connect to vat api'
                })
            } else {
                let apiRes = res
                request('https://ipinfo.io', {json: true}, async (err, res, body) => {
                    if (err) {
                        res.status(503).send({
                            error: 'Can not connect to location api'
                        })
                    } else {
                        let country = res.body.country
                        let vat = apiRes.body.rates[country].standard_rate
                        console.log(vat)

                        let products = await Product.find()
                        console.log(products)
                        products.forEach(function (part, index, theArray) {
                                theArray[index] = ProductUtil.parseProduct(theArray[index])
                                theArray[index].price = VATUtil.calculatePrice(theArray[index].price, vat)
                            }
                        )
                        originalRes.send(products)
                    }
                })
            }
        })
    },
    async post(req, res) {
        try {
            const product = new Product(req.body)
            product.save(function (err) {
                if (err)
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
    async delete(req, res) {
        try {
            await Product.deleteOne({name: req.params.productName})
            res.send({
                message: 'Deleted product ' + req.params.productName
            })
        } catch (err) {
            res.status(500).send({
                error: 'error while deleting product'
            })
        }
    },
    async patch(req, res) {
        try {
            await Product.findOneAndUpdate({name: req.params.productName}, req.body)
            res.send({
                message: 'updated product'
            })
        } catch (err) {
            res.status(500).send({
                error: 'error while editing product'
            })
        }
    }
}