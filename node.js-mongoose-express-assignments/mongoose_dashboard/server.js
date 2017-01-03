// dependancies
var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 3000;

// Create express app
var app = express();

// Use bodyParser to parse form data sent via HTTP post
app.use(bodyParser.urlencoded({ extended: true }));

// Tell server where views are and what templating engine im using
app.set('views', path.join(__dirname, './views')); // Using path to point towards folder
app.set('view engine', 'ejs'); // What engine are we going to use to render our files?

// Create connection to database
var connection = mongoose.connect("mongodb://localhost/dog_db");

// Create dog schema and attach it as a model to our database
var DogSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
});

var Dog = mongoose.model('Dog', DogSchema);

// Routes go here!

app.get('/', function(req, res){
    Dog.find({}, function(err, results){
        if(err) { console.log(err); }
        res.render('index', {dogs: results });
    });
});
// Create
app.post('/', function(req, res){
    // Create a new dog!
    Dog.create(req.body, function(err, result){ // req.body is where I will access the form data. This uses body parser
        if(err) { console.log(err); }
        res.redirect('/') // Once the new dog is created, the function will run.
    });
});

// New
app.get('/new', function(req, res){
    res.render('new');
});

// Show
app.get('/:id', function(req, res){ // taking id that has been provided
    Dog.find({ _id: req.params.id }, function(err, response) { // and we are finding the dog that matches that id. Once we find it, we get a response back.
        if(err) { console.log(err); }
        res.render('show'); // and then we render our show page with a dog variable linked to the first item in the response array.
    });
});
app.get('/:id/edit', function(req,res){ // The param is in the route, and will be sent to us in the request object.
    Dog.find({ _id: req.params.id }, function(err, response) {
    if(err) { console.log(err); }
    res.render('edit'); // id is equal to id. This is now being passed down to edit.ejs
})
});

// Update
app.post('/:id', function(req, res){
    Dog.update({ _id: req.params.id }, req.body, function(err, result){
        if(err) { console.log(err); }
        res.redirect('/');
    });
});

// Delete
app.post('/:id/delete', function(req, res){
    Dog.remove({ _id: req.params.id }, function(err, result){
        if(err) { console.log(err); }
        res.redirect('/');
    });
});
app.listen(port, function(){
    console.log("Running on ", port);
});
