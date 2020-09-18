module.exports = {
    /**
     * Calculates price with added vat with a formula and rounds it to the second decimal place.
     * @param price
     * @param vat
     * @returns {number}
     */
    calculatePrice(price, vat) {
        let vatDecimal = vat / 100
        let vattedPrice = price * (1 + vatDecimal)
        return +(Math.round(vattedPrice + "e+2") + "e-2")
    }
}