// Load the express module
var express = require("express");

// Invoke var express and store the resulting application in var app
var app = express();

// Now that we have created our express app, lets use it to handle requests
app.get('/', function(request, response){
    response.send("<h1>Hello Express</h1>");
});
// Let's tell our server to use a static file folder to handle requests for staic content
app.use(express.static(__dirname + "/static")); //'__dirname' goes into the current directory and then we have connecte '/static' to it.
// console.log(__dirname);

// Lets tell express that we are going to use ejs (embedded Javascript)
// This sets the location where express will look for the ejs views.
app.set('views', __dirname + '/views'); // This is where it will look
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like Jade.
app.set('view engine', 'ejs');

// So far we have loaded the express module into our server file, invoked it to create the server itself, and created a route for the server to handle.
// Now we just have to tell the server to listen!
app.listen(8000, function(){
    console.log("listening on port 8000");
});
