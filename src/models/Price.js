const mongoose = require('mongoose');

const { Schema } = mongoose;

const Price = new Schema({
   
    category: {
        type: String,
        required: true,
        lowercase: true

    },
    package: {
        type: String,
        required: true,
        lowercase: true
    },

    price: {
        type: String,
        required: true,
    },
}, { timestamps: true});

module.exports = mongoose.model('Price', Price)