module.exports = {
    /**
     * Readable version of product
     * @param product
     * @returns {{price: (string|Number|NumberConstructor), name: *, id: *, category: (string)}}
     */
    parseProduct(product) {
        return {
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price
        }
    }
}