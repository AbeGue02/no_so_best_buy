
// GLOBAL VARIABLES

const testProduct = document.querySelector('#getme')
const productsContainer = document.querySelector('#shopping-cart-contents')
let user = ''
let shoppingCart = {}
let cartItems = {}

// CLASSES

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
    async deleteItem() {
        
    }
}

// FUNCTIONS

const createCartItems = async () => {

    cartItems.forEach(async (item) => {
        const product = new DOMCartItem(item._id, item.product[0], 1)
        await product.populate()
        productsContainer.insertAdjacentHTML('beforeend',product.htmlText)
    })

    // const testProduct = new DOMCartItem(1, '65cce449e7d04ed6831f4492', 50)
    // await testProduct.populate()
    // productsContainer.insertAdjacentHTML('beforeend', testProduct.htmlText)
}

const getUser = async () => {
    try {
        const userId = '65ce2726cdfc279c20cc82d1' //Hardcoded for now
        user = await axios.get(`http://localhost:3001/users/${userId}`)
        console.log(user)
    } catch (e) {
        console.error('Error occurred within getUser function',e)
    }
}

const getShoppingCart = async () => {
    try {
        const { _id } = user.data
        shoppingCart = await axios.get(`http://localhost:3001/users/${_id}/shopping-cart`)
        console.log(shoppingCart)
    } catch (e) {
        console.error('Error has occurred within getShoppingCart func: ', e)
    }
}

//Returns an array of all the cart items with the shopping cart id
const getCartItems = async () => {
    try {
        const { _id } = user.data
        const response = await axios.get(`http://localhost:3001/users/${_id}/shopping-cart/cartItems`)
        cartItems = response.data
        console.log(cartItems)
    } catch (e) {
        console.error('Error has occurred within getCartItems func: ', e)
    }
}

// EVENT LISTENERS

testProduct.addEventListener('click', async () => {
    //await createCartItem()
    await getUser()
    await getShoppingCart()
    await getCartItems()

})
