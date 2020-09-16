module.exports = {
    parseProduct(product) {
        return {
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price
        }
    }
}