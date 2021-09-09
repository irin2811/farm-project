let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const host = '127.0.0.1';
const port = 3000;

app.listen(port, host, () => {
    console.log(`Server listens http://${host}:${port}`);
});

let User = require('./models/user_model');
let Farm = require('./models/farm_model');
let Pet = require('./models/pet_model');

mongoose.connect('mongodb://localhost:27017/farm', function(err) {
    if(err) throw err;

    console.log('Successfully connected');
});

app.get('/pet_list', function(req, res) {
    Pet.find().exec(function(err, result) {
        if(err) {
            res.send('Error pet data!');
        } else {
            res.send(JSON.stringify(result));
        }
    });
});

app.post('/pet', function(req, res) {
    if(req.body.nickName && req.body.age) {
        let newPet = new Pet({
            _id: new mongoose.Types.ObjectId(),
            nickName: req.body.nickName,
            age: req.body.age
        });
        newPet.save(function(err) {
            if(err) {
                res.send('Error pet data!');
            } else {
                res.send('Pet created');
            }            
        });
    } else {
        res.status(400).send({message: 'Bad request'});
    }
});


app.post('/farm', function(req, res) {
    if(req.body.name) {
        let newFarm = new Farm({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name
        });
        newFarm.save(function(err) {
            if(err) {
                res.send('Error farm data!');
            } else {
                res.send('Farm created');
            }
        });
    } else {
        res.status(400).send({message: 'Bad request'});
    }
});

app.post('/user', function(req, res) {
    if(req.body.user_fname && req.body.user_lname) {
        let newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            firstName: req.body.user_fname,
            lastName: req.body.user_lname
        });
        newUser.save(function(err) {
            if(err) {
                res.send('Error user data!');
            } else {
                res.send('User created');
            }
        });
    } else {
        res.status(400).send({message: 'Bad request'});
    }
});
