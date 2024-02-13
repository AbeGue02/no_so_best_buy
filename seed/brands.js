const Brand = require('../models/brand');

const main = async () => {
    const brands = [
        {
            name: 'Sony',
            description: 'Electronics brand known for quality products',
        },
        {
            name: 'Bose',
            description: 'Audio equipment brand known for premium sound',
        },
        {
            name: 'Apple',
            description: 'Technology brand offering a wide range of products',
        },
    ];

    try {
        // Save the brands to the database
        await Brand.insertMany(brands);
        console.log('Brands added successfully!');
    } catch (err) {
        console.error('Error inserting brands:', err);
    }
};

main();
