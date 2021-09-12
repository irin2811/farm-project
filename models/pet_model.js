const mongoose = require('mongoose');

// pet scheme
const petSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    nickName: String,
    age: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // link for user
    },
    farm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farm' // link for pet farm
    }
});

// model for pets
const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;