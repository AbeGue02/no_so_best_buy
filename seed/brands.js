
const db = require('../db')
const { Brand } = require('../models');

const main = async () => {
    try {
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

        await Brand.insertMany(brands);
        console.log('Brands added successfully!');
    } catch (err) {
        console.error('Error inserting brands:', err);
    }
};

const run = async () => {
    await main()
    db.close()
}

run()
