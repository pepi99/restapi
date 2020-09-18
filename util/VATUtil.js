module.exports = {
    calculatePrice(price, vat) {
        let vatDecimal = vat / 100
        let vattedPrice = price * (1 + vatDecimal)
        return +(Math.round(vattedPrice + "e+2") + "e-2")
    }
}