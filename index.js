const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/app'); // project global constans
const Model = require('./models');

const app = express();
require('./config/express')(app); // web-server settings
require('./routes/index')(app); // requests for Pet, Farm and User models

mongoose.connect(config.mongoUrl, function(err) {
    if(err) throw err;

    console.log('Successfully connected');
    app.listen(config.port, config.host, () => {
        console.log(`Server listens http://${config.host}:${config.port}`);
    });
});

