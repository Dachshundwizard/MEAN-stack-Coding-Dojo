var greetings = require('./greetings.json');

var greet = function() {
    console.log(greetings.en); // en is the 'english' property
}

module.exports = greet;
