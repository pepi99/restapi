const ProductsController = require('./controllers/ProductsController')
const OrdersController = require('./controllers/OrdersController')
const AuthenticateController = require('./controllers/AuthenticationController')

module.exports = (app) => {
    app.get('/getProducts',
        ProductsController.getAll)
    app.post('/addNewProduct', AuthenticateController.checkToken,
        ProductsController.post)
    app.delete('/deleteProduct/:productName', AuthenticateController.checkToken,
        ProductsController.delete)
    app.patch('/updateProduct/:productName', AuthenticateController.checkToken,
        ProductsController.patch)
    app.get('/authenticate',
        AuthenticateController.authenticate)
    app.post('/addNewOrder', AuthenticateController.checkToken,
        OrdersController.post)
    app.patch('/updateOrder/:orderId', AuthenticateController.checkToken,
        OrdersController.patch)
    app.get('/getOrders', AuthenticateController.checkToken,
        OrdersController.getOrders)
}