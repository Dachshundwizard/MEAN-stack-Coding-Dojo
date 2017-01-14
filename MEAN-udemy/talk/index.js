var filename = "index.js";

var hello = function(name){
    console.log("Hello " + name);
};

var intro = function(){
    console.log("I'm a node file called " + filename);
};

// To expose these methods, we need to use module.exports
module.exports = { // Exporting a Javascript object and returns the functions we have up above
    hello : hello,
    intro : intro
};
