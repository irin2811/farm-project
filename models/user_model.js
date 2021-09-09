let mongoose = require('mongoose');

// схема для пользователя
let userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: String,
    lastName: String
});

// создание модели для пользователя
let User = mongoose.model('User', userSchema);

module.exports = User;