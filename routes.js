const ProductsController = require('./controllers/ProductsController')
const AuthenticateController = require('./controllers/AuthenticationController')
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
    app.get('/authenticate',
        AuthenticateController.authenticate)
}