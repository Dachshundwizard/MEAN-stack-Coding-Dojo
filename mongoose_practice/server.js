var mongoose = require('mongoose');
var express = require('express');
var app = express();

// Make a connection to MongoDB
mongoose.connect('mongodb://localHost/animal_db');
mongoose.connection.once('open', function(){
    console.log("Mongoose connected to db.");
});

// Make a schema
var animalSchema = mongoose.Schema({
    type: String,
    numberOfLegs: Number,
    eatsPeople: Boolean
});
// Make a model // This will allow us to reference our schema and reference

var Animal = mongoose.model('Animal', animalSchema);

app.get('/animals', function(req, res){
    Animal.find({})
    .then(function(animals){
        res.json(animals);
    })
    .catch(function(err){
    });
});

app.listen(8000);

// var tiger = new Animal({
//     type: 'Tiger',
//     numberOfLegs: 4,
//     eatsPeople: true
// });
//
// Animal.create({
//     type: 'dog',
//     numberOfLegs: 4,
//     eatsPeople: false
// })
