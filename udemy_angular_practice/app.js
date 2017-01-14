
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']); // These Dependencies are the list of mudles that myApp uses.

myApp.controller('mainController', ['$scope', '$timeout', '$filter', function($scope, $timeout, $filter) { // Here we can place the services, and ngular will use Dependency injection
// We are injecting services into our controller
    $scope.name = 'John'; // Setting a value
    $scope.handle = '';
    $scope.characters = 5; // The twitter handle must be 5
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }

    $scope.alertClicked = function(){
        alert("HEY!");
    }

    $scope.rules = [ // rules for a twitter handle, for example
        {rulename: "Must be 5 characters"},
        {rulename: "Must not be used elsewhere"},
        {rulename: "Must be cool!"}
    ]; // Array of javascript objects
    $timeout(function(){
        $scope.name = 'Quinten';
    }, 3000);

setTimeout(function() {
    $scope.$apply(function() {
        $scope.handle = 'ilovedachshunds';
        console.log('Scope changed!');
    });
}, 3000);

}]);




    // $scope.formattedname = $filter('uppercase')($scope.name); // Using the filter service. Give it a filter, then pass a string.
    // console.log($resource);
    // $log.info($scope.name);// use the log function
    // $log.info($scope.formattedname);
    // console.log($resource);
    // $log.log('Hello.');
    // $log.info('here is some information.');
    // $log.warn('Warning!');
    // $log.debug('Some debug information.');
    // $log.error('This was an error!!!');


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
