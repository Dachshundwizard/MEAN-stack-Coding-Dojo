// Load the express module
var express = require("express");

// Invoke var express and store the resulting application in var app
var app = express();

// require body-parser
var bodyParser = require('body-parser'); // This allows us to access POST data, which will be pulled out of the request object

// use it!
app.use(bodyParser.urlencoded({extended: true})); // True is any type, false is only string or array.

// Now that we have created our express app, lets use it to handle requests
app.get('/', function(req, res){
    res.send("<h1>Hello Express</h1>");
});
// Let's tell our server to use a static file folder to handle requests for staic content
app.use(express.static(__dirname + "/static")); //'__dirname' goes into the current directory and then we have connecte '/static' to it.
// console.log(__dirname);

// Lets tell express that we are going to use ejs (embedded Javascript)
// This sets the location where express will look for the ejs views.
app.set('views', __dirname + '/views'); // This is where it will look
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like Jade.
app.set('view engine', 'ejs');

app.get("/users", function(req, res){
    // Hard coded user data
    var users_array = [
        {name: "Michael", email: "asdf@gmail.com"},
        {name: "Quinten", email: "jwjwj@gmail.com"}
    ];
    res.render('users', {users: users_array});
});
app.get('/', function(req, res){
    res.render('index', {title: "my Express project"});
});
app.post('/users', function(req, res){
    res.redirect('/');
});
// Here's how we get the form data. This is the route to process new user form data.
app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body);

    res.redirect('/');
});

// So far we have loaded the express module into our server file, invoked it to create the server itself, and created a route for the server to handle.
// Now we just have to tell the server to listen!
app.listen(8000, function(){
    console.log("listening on port 8000");
});
