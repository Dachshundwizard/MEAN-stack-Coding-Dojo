// Load the express module
var express = require("express");

// Invoke var express and store the resulting application in var app
var app = express();

// Now that we have created our express app, lets use it to handle requests
app.get('/', function(request, response){
    response.send("<h1>Hello Express</h1>");
});
// So far we have loaded the express module into our server file, invoked it to create the server itself, and created a route for the server to handle.
// Now we just have to tell the server to listen!
app.listen(8000, function(){
    console.log("listening on port 8000");
});
