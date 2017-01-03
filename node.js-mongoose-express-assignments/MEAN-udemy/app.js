// require('instantHello') If you just put in a string, it will only look in the node modules folder.
// require('./instantHello');
// var goodbye = require('./talk/goodbye');
// var talk = require('./talk');
// var question = require('./talk/question');

var express = require('express'); // once express has been required and brought in, we need to initialize it in order to creat en application
var app = express(); // calling in the express variable as a function
var path = require('path'); // This is a native node module. This is to return a file to a browser. We will use this to map out the actual path to the file we want to use.

var routes = require('./api/routes'); // Requiring our previously made 'routes' folder.

app.set('port', 3000); // setting port's value as 3000

app.use(function(req, res, next){
    console.log(req.method, req.url); // Whether its a POST or a GET and also what the requested url was
    next();
});
app.use(express.static(path.join(__dirname, 'public'))); // Getting the directory path of this public folder and passing it to the express.static method.
// When express receives a request for a root, the first thing it will do is to check if the root matches with any files in the public folder, and if it finds a match it will deliver that file directly to the browser.
// express will look for static roots that start with 'public'
app.use('/api', routes);
    // .sendFile(path.join(__dirname, 'app.js')); // __dirname finds the current directory that the the app.js file is in.
    // Secondly we will pass in the name of this file. When you request '/file' it will return 'app.js' to the browser.
// In the 'app.listen' method, after the app.get retrieving the port number, we've put in an anonymous function
// Which is the callback
// The 'app.listen' method returns an object, and we can use this object to access various properties of the server such as the port. In order to do that, we need to assign the 'app.listen' command to a variable
var server = app.listen(app.get('port'), function() { // It will run this console method once the app.listen function is finished
    var port = server.address().port; // address that variable and extract the port variable
    console.log('Magic happens on port ' + port);
}); // retrieve the port variable
