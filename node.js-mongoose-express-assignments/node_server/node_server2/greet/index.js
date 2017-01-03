var english = require('./english');
var spanish = require('./spanish');
// Make all available as a single module
module.exports = {
    english: english, // First one, name, is the property, and the second one is the name of the variable
    spanish: spanish
}; // When this gets required, it will have two methods on it.
