const mongoose = require('mongoose')

mongoose
    .connect(`mongodb://127.0.0.1:27017/NotSoBestBuyDatabase`)
    .then(() => {
        console.log('Successfully connected to MongoDB.')
    })
    .catch(e => {
        console.error('Connection error', e.message)
    })
mongoose.set({debug: true}) //returns console.logs when it does something

const db = mongoose.connection

module.exports = db