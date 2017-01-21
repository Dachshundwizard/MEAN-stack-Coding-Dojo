myApp.factory('playerFactory', function(){
    var players = [];
    var factory = [];
    factory.getPlayers = function(all_players){
        all_players(players);
    };
    factory.createPlayer = function(player){
        players.push(player);
    };
    factory.destroyPlayer = function(index){
        players.splice(index, 1);
    };
    return factory;
});
