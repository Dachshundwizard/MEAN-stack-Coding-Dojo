// var greet = require('./greet'); // ./ this is same folder location
// greet();

var greet = require('./greet'); // It will grab the folder here

greet.english();
greet.spanish();



// var person = {
//     firstname: 'John',
//     lastname: 'Doe',
//     greet: function() {
//         console.log('Hello, ' + this.firstname + ' ' + this.lastname);
//     }
// };
// console.log(person['firstname']);
// /////OR/////
// person.greet();
// function Person(firstname, lastname) {
//     this.lastname = firstname;
//     this.lastname = lastname;
// }
//
// var john = new Person('John', 'Doe');
// console.log(john.lastname);

// var firstname = 'Jane';
// (function () {
//     var firstname = 'John';
//     console.log(firstname);
// }());
// console.log(firstname);
