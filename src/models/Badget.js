const mongoose = require('mongoose');

const { Schema } = mongoose;

const BudgetDetails = new Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    cityName: String,
    positionEmployee: String,
    companyName: String,
    businessNiche: String,
    serviceRequired: String,
    description: String,
}, {
    timestamps: true
});


module.exports = mongoose.model('BudgetDetails', BudgetDetails);