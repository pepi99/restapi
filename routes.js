const ProductsController = require('./controllers/ProductsController')
module.exports = (app) => {
    app.get('/products',
        ProductsController.get)
    app.get('/products/all',
        ProductsController.getAll)
    app.post('/products',
        ProductsController.post)
    app.delete('/products',
        ProductsController.delete)
    app.patch('/products',
        ProductsController.patch)
}