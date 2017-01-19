var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/index', {
            templateUrl:'/partials/index.html',
            controller: '/controllers/angular_index_controller'
        })
        .when('/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: '/controllers/angular_edit_controller',
            controllerAs: 'eC'
        })
        .when('/new', {
            templateUrl: 'partials/new.html',
            controller: 'controllers/angular_new_controller',
        })
        .otherwise({
            redirectTo: '/index'
        });
});
