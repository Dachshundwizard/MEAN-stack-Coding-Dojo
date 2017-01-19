//
// Load the express module
var express = require("express");
// Use expess to create our app
var app = express();
// Path module allows us to work with our directory paths
var path = require("path");
// This line allows our routing to find the static folder directly
app.use(express.static(path.join(__dirname, "./client")));
// Sets port to 8000 to default unless otherwise specified by the environment
app.set('port', process.env.PORT || 8000);
// Tells our server to listen on port 8000
app.listen(app.get('port'));
