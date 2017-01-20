var app = angular.module("myApp", ["ngRoute"]);

// use the config method to set up routing
app.config(function($routeProvider){
	$routeProvider
		.when("/players", {
			templateUrl: "static/partials/players.html"
		})
		.when("/teams", {
			templateUrl: "./../static/partials/teams.html"
		})
		.when("/associations", {
			templateUrl: "./../static/partials/associations.html"
		});
})