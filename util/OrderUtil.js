module.exports = {
    parseOrder(order) {
        return {
            id: order.idOrder,
            date: order.date,
            products: order.products,
            status: order.status
        }
    }
}