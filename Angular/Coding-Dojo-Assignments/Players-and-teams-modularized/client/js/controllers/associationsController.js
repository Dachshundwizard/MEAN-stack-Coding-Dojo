(function(){

	angular
		.module("myApp")
		.controller("associationsCtrl", AssociationsController);

		AssociationsController.$inject = ['playerFactory', 'teamFactory'];

		function AssociationsController(playerFactory, teamFactory){
			var vm = this;
			vm.players = [];
			vm.teams = [];
			vm.addPlayerToTeam = addPlayerToTeam;
			vm.newAssoc = {};
			vm.removePlayerFromTeam = removePlayerFromTeam;

			// function to be called automatically when the controller is loaded
			playerFactory.getPlayers(function(data){
				vm.players = data;
			})

			teamFactory.getTeams(function(data){
				vm.teams = data;
			})

			function addPlayerToTeam(){
				playerFactory.addPlayerToTeam(vm.newAssoc);
			}

			function removePlayerFromTeam(index){
				playerFactory.removePlayerFromTeam(index);
			}
		}

})();
