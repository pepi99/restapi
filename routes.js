const ProductsController = require('./controllers/ProductsController')
module.exports = (app) => {
    app.get('/getProduct',
        ProductsController.get)
    app.get('/getProducts',
        ProductsController.getAll)
    app.post('/addNewProduct',
        ProductsController.post)
    app.delete('/deleteProduct',
        ProductsController.delete)
    app.patch('/updateProduct',
        ProductsController.patch)
}