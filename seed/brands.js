const db = require ('..db')
const Brand = require('./models');

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
            name: 'JBL',
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
