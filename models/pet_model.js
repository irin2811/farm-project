let mongoose = require('mongoose');

// схема для питомца
let petSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nickName: String,
    age: Number,
    /*user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // ссылка на пользователя
    },
    farm: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Farm' // ссылка на питомник
    }*/
});

// создание модели для питомца
let Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;