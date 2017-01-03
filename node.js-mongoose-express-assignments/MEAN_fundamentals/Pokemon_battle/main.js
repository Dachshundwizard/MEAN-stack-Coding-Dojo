$(document).ready(function(){

    var game = {
        players: [],
        addPlayer: function(name) {
            var new_player = new playerConstructor(name);
            var new_poke = Math.floor((Math.random() * 151) + 1);
            // var new_poke = 1;
            $.ajax({
                url: `http://pokeapi.co/api/v1/pokemon/${new_poke}`,
                data: 'json',
                success: function(pokemon){
                    new_player.addCard(pokemon);
                    $('#all_players').append('<li><p>' + new_player.name + '</p>' + '<p>' + new_player.card.name + '</p>')
                }
            });
            game.players.push(new_player);
        }
    };

    function playerConstructor(name) {
        player = {};
        player.hand = [];
        player.name = name;
        player.card = null;
        player.addCard = function(card) { player.card = card; };
        return player;
    };
    $('#new_player').click(function(){
        var name = $('#name').val();
        game.addPlayer(name);
    });

    $('#battle').click(function(){
        var winner = game.players[0];
        var tie = [];
        for (var i = 1; i < game.players.length; i++) {
            if(game.players[i].card.attack > winner.card.attack){
                console.log(winner.card)
                winner = game.players[i];
            }
            else if(game.players[i].card.attack == winner.card.attack){
                tie.push(game.players[i])
                winner = [game.players[i], winner];
            }
        }
        if (Array.isArray(winner)) {
            $('.winner').append("<h3>It's a tie!</h3><p>" + winner[1].name + ', with ' + winner[1].card.name + ' with attack level of ' + winner[1].card.attack + ', and ' + winner[0].name + ', with ' + winner[0].card.name + ' with attack level of ' + winner[0].card.attack + '!</p>')
        }
        else {
            $('.winner').append('<h3>Winner</h3>' + '<p>' + winner.name + ', with ' + winner.card.name + ' with attack level of ' + winner.card.attack + '!</p>')
        }
    });

});
