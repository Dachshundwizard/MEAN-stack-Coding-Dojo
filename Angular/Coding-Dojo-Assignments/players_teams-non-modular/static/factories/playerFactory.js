myApp.factory('playerFactory', function(){
    var players = [{name: 'Mike'},{name: 'John'},{name: 'Robert'}];
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
