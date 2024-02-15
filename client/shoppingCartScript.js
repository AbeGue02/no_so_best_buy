
const testProduct = document.querySelector('#getme')
const productsContainer = document.querySelector('#shopping-cart-contents')

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
        this.htmlText = ``
        console.log('An object was created')
    }
    async populate() {
        try {
            const productInfo = await axios.get(`http://localhost:3001/products/${this.productId}`)

            const { name, brand, price, category, image } = productInfo.data

            const brandData = await axios.get(`http://localhost:3001/brands/${brand[0]}`)
            const categoryData = await axios.get(`http://localhost:3001/categories/${category[0]}`)

            this.name = name
            this.price = price
            this.image = image
            this.brand = brandData.data.name
            this.category = categoryData.data.name

            this.htmlText = 
                `
                    <div class="shopping-cart-item-container">
                        <div class="shopping-cart-item-image-container">
                            <img src="${this.image}">
                        </div>
                        <div class="shopping-cart-item-info-container">
                            <h3 class="item-name">${this.name}</h3>
                            <h5>Brand: <span class="item-brand">${this.brand}</span></h5>
                            <h5>Category: <span class="item-category">${this.category}</span></h5>
                            <h5>Quantity:</h5>
                            <input class="item-quantity" type="number" placeholder="Item Quantity" value="${this.quantity}">
                        </div>
                        <div class="shopping-cart-item-quantity-container">
                            <h3>$<span class="item-total">${this.price * this.quantity}</span></h3>
                            <h5>$<span class="item-price">${this.price}</span>/each</h5>
                            <button class="delete-item-button">Delete Item</button>
                        </div>
                    </div>
                `

            console.log(this)
        } catch (e) {
            console.error(e)
        }
    }
}

const createCartItem = async () => {
    const testProduct = new DOMCartItem(1, '65cce449e7d04ed6831f4492', 50)
    await testProduct.populate()
    console.log(testProduct.htmlText)
    productsContainer.insertAdjacentHTML('beforeend', testProduct.htmlText)
}

testProduct.addEventListener('click', async () => {
    await createCartItem()
})
