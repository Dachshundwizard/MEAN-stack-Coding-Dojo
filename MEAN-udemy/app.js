// require('instantHello') If you just put in a string, it will only look in the node modules folder.
// require('./instantHello');
// var goodbye = require('./talk/goodbye');
// var talk = require('./talk');
// var question = require('./talk/question');

var express = require('express'); // once express has been required and brought in, we need to initialize it in order to creat en application
var app = express(); // calling in the express variable as a function
var path = require('path'); // This is a native node module. This is to return a file to a browser. We will use this to map out the actual path to the file we want to use.
app.set('port', 3000); // setting port's value as 3000

app.use(express.static(path.join(__dirname, 'public'))); // Getting the directory path of this public folder and passing it to the express.static method.
// When express receives a request for a root, the first thing it will do is to check if the root matches with any files in the public folder, and if it finds a match it will deliver that file directly to the browser.
// express will look for static roots that start with 'public'
// app.get('/', function(req, res){ // This is our first root, which is our 'homepage' root.
//     console.log("GET the homepage");
//     res
//     .status(200) // Changed status code here, check it inside console.
//     .sendFile(path.join(__dirname, 'public', 'index.html')); // .join() method joins a number of different arguments to construct our filepath.

app.get('/json', function(req, res){
    console.log("GET the homepage");
    res
    .status(200) // Changed status code here, check it inside console.
    .json("Express yourself");
});
app.get('/file', function(req, res){
    console.log("GET the file");
    res
    .status(200) // Changed status code here, check it inside console.
    .sendFile(path.join(__dirname, 'app.js')); // __dirname finds the current directory that the the app.js file is in.
    // Secondly we will pass in the name of this file. When you request '/file' it will return 'app.js' to the browser.
});
// In the 'app.listen' method, after the app.get retrieving the port number, we've put in an anonymous function
// Which is the callback
// The 'app.listen' method returns an object, and we can use this object to access various properties of the server such as the port. In order to do that, we need to assign the 'app.listen' command to a variable
var server = app.listen(app.get('port'), function() { // It will run this console method once the app.listen function is finished
    var port = server.address().port; // address that variable and extract the port variable
    console.log('Magic happens on port ' + port);
}); // retrieve the port variable
console.log('Me first!');





// talk.intro();
// talk.hello("Quinten");
//
// var answer = question.ask("What is the meaning of life?");
// console.log(answer);
// goodbye();
