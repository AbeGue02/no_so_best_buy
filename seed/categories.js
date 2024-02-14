const Category = require('./models');

const main = async () => {
    const categoryData = { name: 'Stereo Equipment', description: 'An electronic system that plays an audio source over loudspeakers' };

    try {
        // Save the category to the database
        const category = await Category.create(categoryData);
        console.log('Category added successfully:', category);
    } catch (err) {
        console.error('Error inserting category:', err);
    }
};

main();