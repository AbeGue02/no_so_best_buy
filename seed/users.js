const User = require('./models');

const main = async () => {
    const user = new User({
        username: 'john_doe',
        email: 'john@example.com',
        password: 'password123',
        address: '123 Main St, City',
        phone: '123-456-7890',
    });

    try {
        // Save the user to the database
        await user.save();
        console.log('User added successfully!');
    } catch (err) {
        console.error('Error inserting user:', err);
    }
};

main();
