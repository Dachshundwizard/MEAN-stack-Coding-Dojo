myApp.controller('playersController', function($scope, playerFactory, $location){
    $scope.players = [];
    playerFactory.getPlayers(function(data){
        $scope.players = data;

    });
    $scope.createPlayer = function(){
        playerFactory.createPlayer($scope.newPlayer);
        $scope.newPlayer = {};
        $location.url('/teams');
    };
    $scope.deletePlayer =  function($index){
        playerFactory.destroyPlayer($index);
    };
});
