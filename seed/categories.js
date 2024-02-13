const db = require('../db')
const { Category } = require('../models/');

const main = async () => {
    try {
        const categoryData = [
            { 
                name: 'Stereo Equipment', 
                description: 'An electronic system that plays an audio source over loudspeakers' 
            }
        ]

        // Save the category to the database
        const categories = await Category.insertMany(categoryData);
        console.log('Category added successfully:', category);
    } catch (err) {
        console.error('Error inserting category:', err);
    }
};

const run = async () => {
    await main()
    db.close()
}

run()