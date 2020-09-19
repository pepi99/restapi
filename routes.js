/**
 * Router - redirects endpoint requests to be handled by different controllers.
 */

const ProductsController = require('./controllers/ProductsController')
const OrdersController = require('./controllers/OrdersController')
const AuthenticateController = require('./controllers/AuthenticationController')

module.exports = (app) => {
    app.get('/products',
        ProductsController.getAll)
    app.post('/products', AuthenticateController.checkToken,
        ProductsController.post)
    app.delete('/products/:productName', AuthenticateController.checkToken,
        ProductsController.delete)
    app.patch('/products/:productName', AuthenticateController.checkToken,
        ProductsController.patch)
    app.post('/authenticate',
        AuthenticateController.authenticate)
    app.post('/orders', AuthenticateController.checkToken,
        OrdersController.post)
    app.patch('/orders/:orderId', AuthenticateController.checkToken,
        OrdersController.patch)
    app.get('/orders', AuthenticateController.checkToken,
        OrdersController.getOrders)
}