const db = require('../db')
const { Product, Brand, Category } = require('../models');

const main = async () => {
    const stereoEquipment = await Category.findOne({ name: 'Stereo Equipment' });
    const headphones = await Category.findOne({ name: 'Headphones' });
    const carSpeakers = await Category.findOne({ name: 'Car Speakers' });
    const sony = await Brand.findOne({ name: 'Sony' });
    const bose = await Brand.findOne({ name: 'Bose' });
    const jbl = await Brand.findOne({ name: 'JBL' });

    const products = [
        {
            name: 'Sony MHCEC709iP Mini Hi-Fi Shelf System',
            description: 'High-quality stereo system with Bluetooth connectivity',
            price: 399.99,
            quantity: 50,
            brand: sony._id,
            category: stereoEquipment._id,
            image: 'https://m.media-amazon.com/images/I/51nrkGqWChL.jpg',
            rate: 3.5
        },
        {
            name: 'Sony - XV900 X-Series BLUETOOTH Party Speaker - Black',
            description: 'High-quality stereo system with Bluetooth connectivity',
            price: 899.99,
            quantity: 50,
            brand: sony._id,
            category: stereoEquipment._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6520/6520424ld.jpg;maxHeight=200;maxWidth=300',
            rate: 5
        },
        {
            name: 'Sony - XG500 Portable Bluetooth Speaker - Black',
            description: 'High-quality stereo system with Bluetooth connectivity',
            price: 499.99,
            quantity: 50,
            brand: sony._id,
            category: stereoEquipment._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6520/6520424ld.jpg;maxHeight=200;maxWidth=300',
            rate: 5
        },
        {
            name: 'Sony - WH1000XM5 Wireless Noise-Canceling Over-the-Ear Headphones - Black',
            description: 'High-quality headphones with Bluetooth connectivity and noise-cancellation',
            price: 329.99,
            quantity: 50,
            brand: sony._id,
            category: headphones._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6520/6520424ld.jpg;maxHeight=200;maxWidth=300',
            rate: 4.8
        },
        {
            name: 'Sony - WF1000XM5 True Wireless Noise Cancelling Earbuds - Silver',
            description: 'High-quality headphones with Bluetooth connectivity and noise-cancellation',
            price: 279.99,
            quantity: 50,
            brand: sony._id,
            category: headphones._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6546/6546811_sd.jpg;maxHeight=200;maxWidth=300',
            rate: 3
        },
        {
            name: 'Sony - LinkBuds True Wireless Open-Ear Earbuds - Dark Gray',
            description: 'High-quality headphones with Bluetooth connectivity and noise-cancellation',
            price: 139.99,
            quantity: 50,
            brand: sony._id,
            category: headphones._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6493/6493580_sd.jpg;maxHeight=200;maxWidth=300',
            rate: 3.8
        },
        {
            name: 'Sony - 6.5" 2-way Coaxial Speakers (Pair) - Black',
            description: 'High-quality car speakers',
            price: 129.99,
            quantity: 50,
            brand: sony._id,
            category: carSpeakers._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6554/6554438_sd.jpg;maxHeight=200;maxWidth=300',
            rate: 3.8
        },
        {
            name: 'Sony - 6" x 9" 2-way Coaxial Speakers (Pair) - Black',
            description: 'High-quality car speakers',
            price: 149.99,
            quantity: 50,
            brand: sony._id,
            category: carSpeakers._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6554/6554437_sd.jpg;maxHeight=200;maxWidth=300',
            rate: 3.8
        },
        {
            name: 'Bose - Companion 2 Series III Multimedia Speaker System (2-Piece) - Black',
            description: `The Companion 2 Series III system delivers a significant performance upgrade over your computer's conventional speakers. `,
            price: 149.99,
            quantity: 50,
            brand: bose._id,
            category: stereoEquipment._id,
            image: `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/8864/8864513_sd.jpg;maxHeight=640;maxWidth=550`,
            rate : 4.7
        },
        {
            name: 'Bose - Surround Speakers 700 120-Watt Wireless Satellite Bookshelf Speakers (Pair) - Black',
            description: `The Surround Speakers 700 system delivers a significant performance upgrade over your computer's conventional speakers. `,
            price: 599.99,
            quantity: 50,
            brand: bose._id,
            category: stereoEquipment._id,
            image: `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6359/6359108_sd.jpg;maxHeight=200;maxWidth=300`,
            rate : 4.0
        },
        {
            name: 'Bose - Surround Speakers 120-Watt Wireless Home Theater Speakers (Pair) - Black',
            description: 'Bose Surround Speakers take spaciousness to a whole new level. Add these wireless surround sound speakers to the Bose Soundbar 500 or Soundbar 700 smart speakers',
            price: 399.99,
            quantity: 50,
            brand: bose._id,
            category: stereoEquipment._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6280/6280556_sd.jpg;maxHeight=200;maxWidth=300',
            rate : 4.5
        },
        {
            name: 'Bose QuitComfort Headphones',
            description: 'Wireless headphones with noise-canceling technology',
            price: 199.99,
            quantity: 50,
            brand: bose._id,
            category: headphones._id,
            image: 'https://m.media-amazon.com/images/I/51BsejsSTqL._AC_UF894,1000_QL80_.jpg',
            rate : 4.5
        },
        {
            name: 'Bose QuitComfort Headphones',
            description: 'Wireless headphones with noise-canceling technology',
            price: 199.99,
            quantity: 50,
            brand: bose._id,
            category: headphones._id,
            image: 'https://m.media-amazon.com/images/I/51BsejsSTqL._AC_UF894,1000_QL80_.jpg',
            rate : 4.5
        },
        {
            name: 'Bose QuitComfort Headphones',
            description: 'Wireless headphones with noise-canceling technology',
            price: 199.99,
            quantity: 50,
            brand: bose._id,
            category: headphones._id,
            image: 'https://m.media-amazon.com/images/I/51BsejsSTqL._AC_UF894,1000_QL80_.jpg',
            rate : 4.5
        },
        {
            name: 'JBL HDI-3800',
            description: 'This is a big, beautiful speaker that truly produces a wall of sound, with a detailed soundstage and impactful low end.',
            price: 2750.00,
            quantity: 50,
            brand: jbl._id,
            category: stereoEquipment._id,
            image: 'https://upscaleaudio.com/cdn/shop/products/JBL_HDI_LargeTower_3q_NoGrille_Wanlut_2048x2048_c6f9b86e-9eae-44ee-90f4-1f6232c3025a.jpg?v=1660776851&width=1946',
            rate : 4.5
        },
        {
            name: 'JBL - XTREME3 Portable Bluetooth Speaker - Black',
            description: `Four drivers and two JBL Bass Radiators effortlessly deliver dynamic, immersive sound with deep bass and plenty of detail. You'll get lost in the music wherever you are.`,
            price: 249.99,
            quantity: 50,
            brand: jbl._id,
            category: stereoEquipment._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6445/6445548_sd.jpg;maxHeight=200;maxWidth=300',
            rate : 4.7
        },
        {
            name: 'JBL - PartyBox 310 Portable Party Speaker - Black',
            description: `Around the block or across the beach, make your party heard with 240 watts of big JBL Pro Sound. Sing, rap, strum — then turn up the bass and watch the dance floor come alive.`,
            price: 379.99,
            quantity: 50,
            brand: jbl._id,
            category: stereoEquipment._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6426/6426700_sd.jpg;maxHeight=640;maxWidth=550',
            rate : 4.9
        },
        {
            name: 'JBL - Live 660NC Wireless Noise Cancelling Over-The-Ear Headphones - Black',
            description: `In your world, music is essential, so slip on a pair of JBL Live 660NC and elevate your day. Feel the power of JBL Signature Sound delivered by 40mm drivers`,
            price: 149.99,
            quantity: 50,
            brand: jbl._id,
            category: headphones._id,
            image: `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6463/6463749_sd.jpg;maxHeight=640;maxWidth=550`,
            rate : 5
        },
        {
            name: 'JBL - Tune 235NC True Wireless Noise Cancelling In-Ear Earbuds - Black',
            description: `In your world, music is essential, so slip on a pair of JBL Live 660NC and elevate your day. Feel the power of JBL Signature Sound delivered by 40mm drivers`,
            price: 99.99,
            quantity: 50,
            brand: jbl._id,
            category: headphones._id,
            image: `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6535/6535036_sd.jpg;maxHeight=200;maxWidth=300`,
            rate : 4.5
        },
        {
            name: 'JBL - Tune 510BT Wireless On-Ear Headphones - Black',
            description: `In your world, music is essential, so slip on a pair of JBL Live 660NC and elevate your day. Feel the power of JBL Signature Sound delivered by 40mm drivers`,
            price: 39.99,
            quantity: 50,
            brand: jbl._id,
            category: headphones._id,
            image: `https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6501/6501224_sd.jpg;maxHeight=200;maxWidth=300`,
            rate : 4.5
        },
        {
            name: 'JBL - 6” x 9” Three-way car audio speaker - Black',
            description: `Club coaxial speakers bring JBL pro sound to more vehicles. Their compact design means they'll fit into more vehicles than many of our competitors, and their high sensitivity delivers outstanding performance even with modestly-powered factory systems. Rugged polypropylene cones with the Plus One design deliver hard-hitting bass and long performance life. Edge-driven silk dome tweeters deliver broader and smoother high frequency response, never-harsh regardless of output level. They're the perfect upgrade from factory speakers.`,
            price: 149.99,
            quantity: 50,
            brand: jbl._id,
            category: carSpeakers._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6572/6572548_sd.jpg;maxHeight=640;maxWidth=550',
            rate: 5
        },
        {
            name: 'JBL - 6-1/2” Component Speakers - Black',
            description: `Club component speakers bring JBL pro sound to more vehicles. Their compact design means they'll fit into more vehicles than many of our competitors, and their high sensitivity delivers outstanding performance even with modestly-powered factory systems. Rugged polypropylene cones with the Plus One design deliver hard-hitting bass and long performance life. Edge-driven silk dome tweeters deliver broader and smoother high frequency response, never-harsh regardless of output level. Starfish Tweeter Mounting Adapter and I-Mount Tweeter Mounting Kit in component speaker system for easy installation. They're the perfect upgrade from factory speakers.             `,
            price: 199.99,
            quantity: 50,
            brand: jbl._id,
            category: carSpeakers._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6572/6572548_sd.jpg;maxHeight=640;maxWidth=550',
        },
        {
            name: 'JBL - 6-1/2” Two-way car audio speaker Premium Speaker - Black',
            description: `Club coaxial speakers bring JBL pro sound to more vehicles. Their compact design means they'll fit into more vehicles than many of our competitors, and their high sensitivity delivers outstanding performance even with modestly-powered factory systems. Carbon Fiber Woofer with Plus One architecture deliver hard-hitting bass and long performance life. Edge-driven silk dome tweeters deliver broader and smoother high frequency response, never-harsh regardless of output level.`,
            price: 169.99,
            quantity: 50,
            brand: jbl._id,
            category: carSpeakers._id,
            image: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6572/6572548_sd.jpg;maxHeight=640;maxWidth=550',
            rate: 5
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

const run = async () => {
    await main()
    db.close()
}

run()