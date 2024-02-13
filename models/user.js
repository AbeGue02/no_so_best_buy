const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const User = new Schema(
    {
        user_name: { type: String, required: true },
        email: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: String, required: true },
        password: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports =  User