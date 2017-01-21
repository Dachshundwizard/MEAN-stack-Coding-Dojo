myApp.controller('teamsController', function($scope, teamFactory, $location, $routeParams){
    $scope.teams = [];
    teamFactory.getTeams(function(data){
        $scope.teams = data;
    });
    $scope.createTeam = function(){
        teamFactory.createTeam($scope.newTeam);
        $scope.newTeam = {};
        $location.url('/associations');
    };
    $scope.deleteTeam = function($index){
        teamFactory.destroyTeam($index);
    };
    console.log($routeParams);
});
