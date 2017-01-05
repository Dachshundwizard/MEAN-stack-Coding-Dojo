
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($scope, $log, $filter, $resource) { // Here we can

    console.log($resource);
    $log.log('Hello.');
    $log.info('here is some information.');
    $log.warn('Warning!');
    $log.debug('Some debug information.');
    $log.error('This was an error!!!');

});

// var Person = function(firstname, lastname){
//     this.firstname = firstname;
//     this.lastname = lastname;
// }
//
// function logPerson()
// {
//     var john = new Person('John', 'Doe');
//     console.log(john);
// }
//
// logPerson();
//
//
// function logPerson(person){
//     console.log(person);
// }
// var john = new Person('John', 'Doe');
// logPerson(john);
