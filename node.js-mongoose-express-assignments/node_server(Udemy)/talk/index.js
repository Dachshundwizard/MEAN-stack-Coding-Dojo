// First create a couple of functions
var filename = "index.js";
var hello = function(name) {
    console.log("Hello " + name);
};

var intro = function() {
    console.log("I'm a node file called " + filename);
};

module.exports = { // Here we are exporting these functions so we can use them inside app.js
    hello : hello,
    intro : intro
};
