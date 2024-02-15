const cart = document.querySelector('#cart-container')
cart.addEventListener('click', () => {
    console.log()
    window.location.href = 'shoppingCart.html'
})

//Product data
const products = [
    { name: 'Sony MHCEC709iP Mini Hi-Fi Shelf System', rating: 3.5, price: 399.99, brand: 'Sony', category: 'Stereo Equipment' },
    { name: 'Sony - XV900 X-Series BLUETOOTH Party Speaker - Black', rating: 5.0, price: 899.99, brand: 'Sony', category: 'Stereo Equipment'},
    { name: 'Sony - XG500 Portable Bluetooth Speaker - Black', rating: 5.0, price: 499.99, brand: 'Sony', category: 'Stereo Equipment'},
    { name: 'Sony - WH1000XM5 Wireless Noise-Canceling Over-the-Ear Headphones - Black', rating: 4.8, price: 329.99, brand: 'Sony', category: 'Headphones'},
    { name: 'Sony - WF1000XM5 True Wireless Noise Cancelling Earbuds - Silver', rating: 3.0, price: 279.99, brand: 'Sony', category: 'Headphones' },
    { name: 'Sony - LinkBuds True Wireless Open-Ear Earbuds - Dark Gray', rating: 3.8, price: 139.99, brand: 'Sony', category: 'Headphones'},
    { name: 'Sony - 6.5" 2-way Coaxial Speakers (Pair) - Black', rating: 3.8, price: 129.99, brand: 'Sony', category: 'Car Speakers'},
    { name: 'Sony - 6" x 9" 2-way Coaxial Speakers (Pair) - Black', rating: 3.8, price: 149.99, brand: 'Sony', category: 'Car Speakers'},
    { name: 'Bose - Companion 2 Series III Multimedia Speaker System (2-Piece) - Black', rating: 4.7, price: 149.99, brand: 'Bose', category: 'Stereo Equipment'},
    { name: 'Bose - Surround Speakers 700 120-Watt Wireless Satellite Bookshelf Speakers (Pair) - Black', rating: 4.0, price: 599.99, brand: 'Bose', category: 'Stereo Equipment'},
    { name: 'Bose - Surround Speakers 120-Watt Wireless Home Theater Speakers (Pair) - Black', rating: 4.5, price: 399.99, brand: 'Bose', category: 'Stereo Equipment'},
    { name: 'Bose QuitComfort Headphones', rating: 4.5, price: 199.99, brand: 'Bose', category: 'Headphones'},
    { name: 'Bose QuitComfort Headphones', rating: 4.5, price: 199.99, brand: 'Bose', category: 'Headphones'},
    { name: 'Bose QuitComfort Headphones', rating: 4.5, price: 199.99, brand: 'Bose', category: 'Headphones'},
    { name: 'JBL HDI-3800', rating: 4.5, price: 2750.00, brand: 'JBL', category: 'Stereo Equipment'},
    { name: 'JBL - XTREME3 Portable Bluetooth Speaker - Black', rating: 4.7, price: 249.99, brand: 'JBL', category: 'Stereo Equipment'},
    { name: 'JBL - PartyBox 310 Portable Party Speaker - Black', rating: 4.9, price: 379.99, brand: 'JBL', category: 'Stereo Equipment'},
    { name: 'JBL - Live 660NC Wireless Noise Cancelling Over-The-Ear Headphones - Black', rating: 5.0, price: 149.99, brand: 'JBL', category: 'Headphones'},
    { name: 'JBL - Tune 235NC True Wireless Noise Cancelling In-Ear Earbuds - Black', rating: 4.5, price: 99.99, brand: 'JBL', category: 'Headphones'},
    { name: 'JBL - Tune 510BT Wireless On-Ear Headphones - Black', rating: 4.5, price: 39.99, brand: 'JBL', category: 'Headphones'},
    { name: 'JBL - 6” x 9” Three-way car audio speaker - Black', rating: 5.0, price: 149.99, brand: 'JBL', category: 'Car Speakers'},
    { name: 'JBL - 6-1/2” Component Speakers - Black', rating: 5.0, price: 199.99, brand: 'JBL', category: 'Car Speakers'},
    { name: 'JBL - 6-1/2” Two-way car audio speaker Premium Speaker - Black', rating: 5.0, price: 169.99, brand: 'JBL', category: 'Car Speakers'},
]

// Function to render product cards
function renderProducts(productsToRender) {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Rating: ${product.rating}</p>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
        `;

        productsSection.appendChild(productCard);
    });
}

// Function to apply filters
function applyFilters() {
    const minRating = parseFloat(document.getElementById('rating').value);
    const minPrice = parseFloat(document.getElementById('priceMin').value);
    const maxPrice = parseFloat(document.getElementById('price').value);
    const selectedCategory = document.getElementById('categories').value;
    const searchTerm = document.getElementById('search-bar-container').querySelector('input').value.toLowerCase();

    const filteredProducts = products.filter(product => {
        const ratingFilter = minRating === 0 || product.rating >= minRating;
        const minPriceFilter = isNaN(minPrice) || product.price >= minPrice;
        const maxPriceFilter = isNaN(maxPrice) || product.price <= maxPrice;
        const categoryFilter = selectedCategory === 'all' || product.category.toLowerCase() === selectedBrand.toLowerCase();
        const searchFilter = searchTerm === '' || product.name.toLowerCase().includes(searchTerm);

        return ratingFilter && minPriceFilter && maxPriceFilter && categoryFilter && searchFilter;
    });

    renderProducts(filteredProducts);
}

// Function to update the price range display dynamically
function updatePriceRangeDisplay() {
    const priceInput = document.getElementById('priceMin');
    const priceValue = document.getElementById('price-value');

    priceValue.innerText = `$${priceInput.value}`;
}

// Attach event listeners to filter elements
document.getElementById('ratingSelect').addEventListener('change', applyFilters);
document.getElementById('priceMin').addEventListener('input', function () {
    updatePriceRangeDisplay();
    applyFilters();
});
document.getElementById('priceMax').addEventListener('input', applyFilters);
document.getElementById('categories').addEventListener('change', applyFilters);

// Initial rendering
renderProducts(products);

