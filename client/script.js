//Product data
const products = [
    { name: 'Pioneer 7', rating: 4.5, price: 799.99, brand: 'Pioneer' },
    { name: 'Kenwood 6.8', rating: 4.0, price: 499.99, brand: 'Kenwood' },
    { name: 'JVC 6.8', rating: 4.2, price: 899.99, brand: 'JVC' },
];

const cart = [];

// Function to render product cards
function renderProducts(productsToRender) {
    const productsSection = document.getElementById('products');
    const notFoundText = document.getElementById('not-found-text');

    productsSection.innerHTML = '';

    if (productsToRender.length === 0) {
        notFoundText.style.display = 'block';
    } else {
        notFoundText.style.display = 'none';
    

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Rating: ${product.rating}</p>
            <p>Price: $${product.price}</p>
            <p>Brand: ${product.brand}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productsSection.appendChild(productCard);
    });
}
}

// Function to apply filters
function applyFilters() {
    const minRating = parseFloat(document.getElementById('rating').value);
    const maxPrice = parseFloat(document.getElementById('price').value);
    const selectedBrand = document.getElementById('brand').value;

    const filteredProducts = products.filter(product => {
        const ratingFilter = minRating === 0 || product.rating >= minRating;
        const priceFilter = isNaN(maxPrice) || product.price <= maxPrice;
        const brandFilter = selectedBrand === 'all' || product.brand.toLowerCase() === selectedBrand.toLowerCase();

        return ratingFilter && priceFilter && brandFilter;
    });

}

function performSearch() {
    const searchInput = document.getElementById('search').value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const nameIncludesSearch = product.name.toLowerCase().includes(searchInput);
        const brandIncludesSearch = product.brand.toLowerCase().includes(searchInput);

        return nameIncludesSearch || brandIncludesSearch;
    });

    renderProducts(filteredProducts);
}

// Function to update the price range display dynamically
function updatePriceRangeDisplay() {
    const priceInput = document.getElementById('price');
    const priceValue = document.getElementById('price-value');

    priceValue.innerText = `$${priceInput.value}`;
}

// Function to add items to the cart
function addToCart(productId) {
    const productToAdd = products.find(product => product.id === productId);

    if (productToAdd) {
        cart.push(productToAdd);
        updateCartDisplay();
    }
}

// Function to update the cart display
function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = cart.length.toString();
}

// Attach event listeners to filter elements
document.getElementById('rating').addEventListener('change', applyFilters);
document.getElementById('price').addEventListener('input', function () {
    updatePriceRangeDisplay();
    applyFilters();
});
document.getElementById('brand').addEventListener('change', applyFilters);
document.getElementById('search').addEventListener('input', performSearch);
// Initial rendering
renderProducts(products);
updateCartDisplay();

