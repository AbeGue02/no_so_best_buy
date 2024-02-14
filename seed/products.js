const { Product, Brand, Category } = require('./models');

const main = async () => {
    const brand = await Brand.findOne({ name: 'Sony' });
    const category = await Category.findOne({ name: 'Stereo Equipment' });
    const brandB = await Brand.findOne({ name: 'Boss' });
    const brandC = await Brand.findOne({ name: 'JBL' });

    const products = [
        {
            name: 'Sony MHCEC709iP Mini Hi-Fi Shelf System',
            description: 'High-quality stereo system with Bluetooth connectivity',
            price: 399.99,
            brand: brand._id,
            category: category._id,
            image: 'https://m.media-amazon.com/images/I/51nrkGqWChL.jpg',
            rate: 3.5
        },
        {
            name: 'boss QuitComfort Headphones',
            description: 'Wireless headphones with noise-canceling technology',
            price: 199.99,
            brand: brandB._id,
            category: category._id,
            image: 'https://m.media-amazon.com/images/I/51BsejsSTqL._AC_UF894,1000_QL80_.jpg',
            rate : 4.5
        },
        {
            name: 'JBL HDI-3800',
            description: 'This is a big, beautiful speaker that truly produces a wall of sound, with a detailed soundstage and impactful low end.',
            price: 2750.00,
            brand: brandC._id,
            category: category._id,
            image: 'https://upscaleaudio.com/cdn/shop/products/JBL_HDI_LargeTower_3q_NoGrille_Wanlut_2048x2048_c6f9b86e-9eae-44ee-90f4-1f6232c3025a.jpg?v=1660776851&width=1946',
            rate : 4.5
        },
    ];

    try {
        // Save the products to the database
        await Product.insertMany(products);
        console.log('Products added successfully!');
    } catch (err) {
        console.error('Error inserting products:', err);
    }
};

main();
