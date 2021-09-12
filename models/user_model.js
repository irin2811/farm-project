const mongoose = require('mongoose');

// user schema
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    firstName: String,
    lastName: String,
});

// model for user
const User = mongoose.model('User', userSchema);

module.exports = User;