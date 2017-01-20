(function(){

	angular
		.module("myApp")
		.factory("playerFactory", playerFactory);

		function playerFactory(){
			var playerObj = [
				{
					name: "Mike",
					team: "SeaHawks"
				}
			];
			var factory = {
				addPlayers: addPlayers,
				deletePlayer: deletePlayer,
				getPlayers: getPlayers,
				addPlayerToTeam: addPlayerToTeam,
				removePlayerFromTeam: removePlayerFromTeam
			};
			return factory;

			function addPlayers(newPlayer, callback){
				newPlayer.team = "";
				playerObj.push(newPlayer);
				callback(playerObj);
			}
			function deletePlayer(index, callback){
				playerObj.splice(index,1);
				callback(playerObj);
			}
			function getPlayers(callback){
				callback(playerObj);
			}
			function addPlayerToTeam(data){
				playerObj[data.playerIdx].team = data.team;
			}
			function removePlayerFromTeam(index){
				playerObj[index].team = "";
			}
		}


})();