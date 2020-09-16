const ProductsController = require('./controllers/ProductsController')
module.exports = (app) => {
    app.get('/products',
        ProductsController.get)
    app.post('/products',
        ProductsController.post)
}