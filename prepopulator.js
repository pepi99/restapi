const Product = require('./models/Product')
const Order = require('./models/Order')
module.exports = {
    async prepopulateWithProducts() {
        let p1 = {
            name: 'Apple',
            category: 'Fruit',
            price: "1"
        }
        let p2 = {
            name: 'T-shirt',
            category: 'Dress',
            price: '20'
        }
        let p3 = {
            name: 'Fork',
            category: 'Utensil',
            price: "1.50"
        }
        let products = [p1, p2, p3]
        for (let i = 0; i < products.length; i++) {
            const product = new Product(products[i])
            product.save(function (err) {
                if (err)
                    console.log(err)
            })
        }
    },
    async prepopulateWithOrders() {
        let o1 = {
            products: [1, 3],
            status: 'Pending'
        }
        let o2 = {
            products: [1, 2],
            status: 'Delivered'
        }
        let o3 = {
            products: [1, 2, 3],
            status: 'Pending'
        }
        let orders = [o1, o2, o3]
        for (let i = 0; i < orders.length; i++) {
            const order = new Order(orders[i])
            order.save(function (err) {
                if (err)
                    console.log(err)
            })
        }

    },
    async prepopulate() {
        await this.prepopulateWithProducts();
        await this.prepopulateWithOrders();

    }
}