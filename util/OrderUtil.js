module.exports = {
    /**
     * Readable version of order.
     * @param order
     * @returns {{date: string, id: *, products: number[], status: *}}
     */
    parseOrder(order) {
        return {
            id: order.idOrder,
            date: order.date,
            products: order.products,
            status: order.status
        }
    }
}