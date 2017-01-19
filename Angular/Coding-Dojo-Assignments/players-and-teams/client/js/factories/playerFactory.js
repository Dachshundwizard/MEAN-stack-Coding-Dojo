// This is the first JavaScript file to load, so it initializes the module
var myAppModule = angular.module("myApp", ["ngRoute"]);

myAppModule.factory("PlayerFactory", function(){ // initializes our list of players
    var players = [
        {name: "Quinten", team: "Seahawks"},
        {name: "Dino", team: "Rockets"},
        {name: "Issa", team: "BungMais"},
        {name: "Robert", team: "Blasters"},
        {name: "Casey", team: "Slitherers"},
        {name: "Levi", team: "Donkeys"},
    ]

    var factory = {};

    // Pass the player list to a controller
    factory.getPlayers = function(callback){
        callback(players);
    }

    // Add new player to the list
    factory.addPlayer = function(player){
        player.team = "";
        players.push(player);
    }

    // Remove the player from the list
    factory.removePlayer = function($index){
        players.splice($index, 1);
    }

    // Set a player's team name
    factory.addPlayerToTeam = function(data){
        players[data.playerIdx].team = data.team;
    }

    // Reset a player's team name to an empty string
    factory.removePlayerFromTeam = function($index){
        players[$index].team = "";
    }
    return factory;
})
