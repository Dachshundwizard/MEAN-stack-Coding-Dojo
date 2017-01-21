myApp.controller('associationsController', function($scope, teamFactory, playerFactory){
    $scope.teams = [];
    $scope.players = [];
    $scope.assignments = [];
    teamFactory.getTeams(function(data){
        $scope.teams = data;
    });
    playerFactory.getPlayers(function(data){
        $scope.players = data;
    });
    $scope.assignTeam = function(){
        console.log('controller' + $scope.makeTeam.player + $scope.makeTeam.team);
        teamFactory.assignTeam($scope.makeTeam);
        $scope.makeTeam = {};
    };
    teamFactory.getAssignTeam(function(data){
        $scope.assignments = data;
    });
    $scope.clearTeam = function($index){
        teamFactory.removeTeam($index);
    };

});
