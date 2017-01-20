(function(){

	angular
		.module("myApp")
		.controller("playersCtrl", PlayersController);

		PlayersController.$inject = ['playerFactory'];

		function PlayersController(playerFactory){
			var vm = this;
			vm.setPlayers = setPlayers;
			vm.addPlayers = addPlayers;
			vm.deletePlayer = deletePlayer;
			vm.allPlayers = [];
			vm.newPlayer = {};

			function setPlayers(data){
				vm.newPlayer = {};
				vm.allPlayers = data;
			}
			function addPlayers(){
				playerFactory.addPlayers(vm.newPlayer, setPlayers);
			}
			function deletePlayer(index){
				playerFactory.deletePlayer(index, setPlayers);
			}
		}


})();