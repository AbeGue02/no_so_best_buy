const axios = require("axios")

const testProduct = document.querySelector('#getme')

class DOMCartItem {
    constructor(id, productId, quantity) {
        this.id = id
        this.productId = productId
        this.quantity = quantity
        this.name = ''
        this.price = 0
        this.brand = ''
        this.category = ''
        this.image = ''
        console.log('An object was created')
    }

    async populate() {
        try {
            const productInfo = await axios.get(`http://localhost:3001/products/${this.productId}`)
            console.log('Item successfully retrieved from server! ', this.productId)
            console.log(productInfo)
        } catch (e) {
            console.error(e)
        }
    }
}

const createDummy = async () => {
    const testProduct = new DOMCartItem(1, '65cce449e7d04ed6831f4492', 50)
    await testProduct.populate()
}

testProduct.addEventListener('click', async () => {
    await createDummy()
})
