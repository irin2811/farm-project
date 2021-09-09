let mongoose = require('mongoose');

// схема для питомника
let farmSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    created: {
        type: Date,
        default: Date.now
    }
});

// создание модели для питомника
let Farm = mongoose.model('Farm', farmSchema);

module.exports = Farm;