const ProductsController = require('./controllers/ProductsController')
const AuthenticateController = require('./controllers/AuthenticationController')
module.exports = (app) => {
    app.get('/getProduct', AuthenticateController.checkToken,
        ProductsController.get)
    app.get('/getProducts',
        ProductsController.getAll)
    app.post('/addNewProduct', AuthenticateController.checkToken,
        ProductsController.post)
    app.delete('/deleteProduct', AuthenticateController.checkToken,
        ProductsController.delete)
    app.patch('/updateProduct', AuthenticateController.checkToken,
        ProductsController.patch)
    app.get('/authenticate',
        AuthenticateController.authenticate)
}