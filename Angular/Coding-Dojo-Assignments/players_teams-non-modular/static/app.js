var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);
myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'partials/players.html'
        })
        .when('/teams', {
            templateUrl: 'partials/teams.html'
        })
        .when('/associations', {
            templateUrl: 'partials/associations.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
