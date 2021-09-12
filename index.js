const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/app'); // project global constans
const Pet = require('./models/pet_model');
const Farm = require('./models/farm_model');
const User = require('./models/user_model');

const app = express();
require('./config/express')(app); // web-server settings
require('./routes/pet')(app); // request for Pet model
require('./routes/farm')(app); // request for Farm model
require('./routes/user')(app); // request for User model

mongoose.connect(config.mongoUrl, function(err) {
    if(err) throw err;

    console.log('Successfully connected');
    app.listen(config.port, config.host, () => {
        console.log(`Server listens http://${config.host}:${config.port}`);
    });
});

