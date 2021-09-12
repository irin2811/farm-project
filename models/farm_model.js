const mongoose = require('mongoose');

// pet farm scheme
const farmSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    name: String,
});

// model for farm
const Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;