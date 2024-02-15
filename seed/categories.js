
const db = require('../db')
const { Category } = require('../models/');

const main = async () => {
    try {
        const categoryData = [
            { 
                name: 'Stereo Equipment', 
                description: 'An electronic system that plays an audio source over loudspeakers' 
            },
            {
                name: 'Headphones',
                description: 'A pair of small speakers used for listening to sound from a computer, music player or other such electronic device.'
            },
            {
                name: 'Car Speakers',
                description: `Speakers that convert the electrical signals from the car's audio system into sound waves that can be heard by the passengers in the car.`
            }
        ]

        // Save the category to the database
        await Category.insertMany(categoryData);
        console.log('Category added successfully:', categoryData);
    } catch (err) {
        console.error('Error inserting category:', err);
    }
};

const run = async () => {
    await main()
    db.close()
}

run()