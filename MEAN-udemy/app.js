// require('instantHello') If you just put in a string, it will only look in the node modules folder.
require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');
var question = require('./talk/question');

talk.intro();
talk.hello("Quinten");

var answer = question.ask("What is the meaning of life?");
console.log(answer);
goodbye();
