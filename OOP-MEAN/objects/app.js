// var person = new Object();
//
// person["firstname"] = "Quinten";
// person["lastname"] = "Warren";
//
// var firstNameProperty = "firstname";
//
// console.log(person);
// console.log(person[firstNameProperty]); //This operator will take the "person" object and look for a property with this name
// console.log(person.firstname); // the dot is an operator/function
// // The name of the object I am looking @ (object) and the property I am trying to find
//
// person.address = new Object(); // Child obejct within the person object
// person.address.street = "511 100th ave.";
// person.address.city = "New York";
// person.address.state = "NY";
//
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person["address"]["state"]);

// Object literal = {}  which is the same as new Object()
// var person = {
//     firstname: 'Quinten',
//     lastname: 'Warren',
//     address: {
//         street: 'lala 101 ave NE St.',
//         city: 'New York',
//         state: 'NY'
//     }
// };
//
// function greet(person){
//     console.log('Hi ' + person.firstname);
// }
// greet(person);

function greet(name){
    console.log('hi');
}

greet.language = 'english'; // added a propery to the fnction, because it is an object
console.log(greet());
