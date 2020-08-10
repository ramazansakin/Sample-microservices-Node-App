const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    username: String,
    email: String,
    phone: String,
    orderId: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Customer', CustomerSchema);