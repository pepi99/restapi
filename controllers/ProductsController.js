const Product = require('../models/Product')
const ProductUtil = require('../util/ProductUtil')
const VATUtil = require('../util/VATUtil')
const request = require('request');
module.exports = {
    /**
     * Retrieves all orders with price increased wrt to the country VAT.
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
    async getAll(req, res) {
        let originalRes = res
        request('https://euvatrates.com/rates.json', {json: true}, (err, res, body) => { // Get the VAT rates from the API provided in the task
            if (err) {
                res.status(503).send({
                    error: 'Can not connect to vat api'
                })
            } else {
                let apiRes = res
                request('https://ipinfo.io', {json: true}, async (err, res, body) => { // Get the user location (country)
                    if (err) {
                        res.status(503).send({
                            error: 'Can not connect to location api'
                        })
                    } else {
                        let country = res.body.country
                        let vat = apiRes.body.rates[country].standard_rate // Get the specific VAT
                        let products = await Product.find()

                        products.forEach(function (part, index, theArray) {
                                theArray[index] = ProductUtil.parseProduct(theArray[index]) // Model it to look as described in the task.
                                theArray[index].price = VATUtil.calculatePrice(theArray[index].price, vat) // Just increase the price with this util.
                            }
                        )
                        originalRes.send(products) // Display to user.
                    }
                })
            }
        })
    },
    /**
     * Add a new product.
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
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
    /**
     * Delete a product by name
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
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
    /**
     * Patch a product by name.
     * @param req
     * @param res
     * @returns {Promise<void>}
     */
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