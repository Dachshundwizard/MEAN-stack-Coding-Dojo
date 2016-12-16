require('./instantHello'); // "./" means to look into the same folder that app.js is sitting in
var goodbye = require('./talk/goodbye');
var talk = require('./talk'); // If you have an index.js file inside a folder, you dont have to specify the file itself. Only the folder.
var question = require('./talk/question');

talk.intro();
talk.hello("Quinten");

var answer = question.ask("What is the meaning of life?");
console.log(answer);
goodbye();
