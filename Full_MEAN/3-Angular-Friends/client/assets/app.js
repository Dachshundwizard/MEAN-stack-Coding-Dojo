var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/partials/index.html',
            controller: 'indexController'
        })
        .when('/show/:id', {
            templateUrl: '/static/partials/show.html',
            controller: 'showController'
        })
        .when('/new', {
            templateUrl: '/static/partials/new.html',
            controller: 'newController'
        })
        .when('/edit/:id', {
            templateUrl: '/static/partials/edit.html',
            controller: 'editController'
        })
        .otherwise('/');
})
