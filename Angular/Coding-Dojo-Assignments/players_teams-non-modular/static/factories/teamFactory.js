myApp.factory('teamFactory', function(){
    var teams = [];
    var assignments = [];
    var factory = [];
    factory.getTeams = function(all_teams){
        all_teams(teams);
    };
    factory.createTeam = function(team){
        teams.push(team);
    };
    factory.destroyTeam = function(index){
        teams.splice(index, 1);
    };
    factory.assignTeam = function(info){
        console.log('factory' + info);
        assignments.push(info);
    };
    factory.getAssignTeam = function(all_assignments){
        all_assignments(assignments);
    };
    factory.removeTeam = function(index){
        assignments.splice(index, 1);
    };
    return factory;
})
