//Product data
const products = []

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
            <p>Categories: ${product.categories}</p>
        `;

        productsSection.appendChild(productCard);
    });
}

// Function to apply filters
function applyFilters() {
    const minRating = parseFloat(document.getElementById('rating').value);
    const minPrice = parseFloat(document.getElementById('priceMin').value);
    const maxPrice = parseFloat(document.getElementById('price').value);
    const selectedCategories = document.getElementById('categories').value;

    const filteredProducts = products.filter(product => {
        const ratingFilter = minRating === 0 || product.rating >= minRating;
        const minPriceFilter = isNaN(minPrice) || product.price >= minPrice;
        const maxPriceFilter = isNaN(maxPrice) || product.price <= maxPrice;
        const brandFilter = selectedBrand === 'all' || product.brand.toLowerCase() === selectedBrand.toLowerCase();

        return ratingFilter && priceFilter && categoriesFilter;
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
document.getElementById('rating').addEventListener('change', applyFilters);
document.getElementById('priceMin').addEventListener('input', function () {
    updatePriceRangeDisplay();
    applyFilters();
});
document.getElementById('priceMax').addEventListener('input', applyFilters);
document.getElementById('categories').addEventListener('change', applyFilters);

// Initial rendering
renderProducts(products);
