 const mongoose = require('mongoose');

 
const { Schema } = mongoose;

const Pricing = new Schema({
    idPackage: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    package: {
        type: String,
        required: true
    },
    price:  {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    expireDate: {
        type: String,
        required: true
    },
    cvc: {
        type: String,
        required: true
    }

}, { timestamps: true})


module.exports = mongoose.model('Pricing', Pricing);