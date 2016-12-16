console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');

const _ = require('lodash');

const notes = require('./notes.js');


var command = process.argv[2];
console.log('Command: ', command);

if(command === 'add'){
    console.log('Adding new note');
} else if(command === 'list') {
    console.log('Listing all notes');
} else if(command === 'remove'){
    console.log('Note removed.');
} else if(command === 'read'){
    console.log('Now reading item.');
} else {
    console.log('Command not recognized.');
}
// console.log(_.isString(true));
// console.log(_.isString('Andrew'));
// var filteredArray = _.uniq(['Andrew', 1, 'Andrew', 1, 2, 3, 4]);
// console.log(filteredArray);

// console.log('Result:', notes.add(9, -2));

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);





// var filteredArray = _.uniq(['Quinten', 5, 'Quinten', 1, 2, 3, 4]);
// console.log(filteredArray);
// console.log(_.isString(true));
// console.log(_.isString('Quinten'));



// console.log('Result: ', notes.add(9, -2));

// var user = os.userInfo();
// // console.log(user);
// fs.appendFile('greeting.txt', `Hello ${user.username}! You are ${notes.age}.`);
