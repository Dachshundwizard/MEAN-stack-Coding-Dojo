myAppModule.controller("PlayersController", function($scope, PlayerFactory){
    $scope.players = [];

    // When this controller is loaded, fetch the player list
    PlayerFactory.getPlayers(function(players){
        $scope.players = players; // setting scope.players to factory's players list
    })

    // Pass new player info to the PlayerFactory
    $scope.addPlayer = function(){
        PlayerFactory.addPlayer($scope.newPlayer)
        $scope.newPlayer = {}; // Reset newPlayer form
    }

    // Pass $index to PLayerFactory to remove
    $scope.removePlayer = function($index){
        PlayerFactory.removePlayer($index);
    }
})
