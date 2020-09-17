module.exports = {
    calculatePrice(price, vat) {
        let vatDecimal = vat / 100
        return price * (1 + vatDecimal)
    }
}