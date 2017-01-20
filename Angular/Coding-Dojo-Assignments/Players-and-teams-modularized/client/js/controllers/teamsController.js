(function(){

	angular
		.module("myApp")
		.controller("teamsCtrl", TeamsController);

		TeamsController.$inject = ['teamFactory'];

		function TeamsController(teamFactory){
			var vm = this;
			vm.setTeams = setTeams;
			vm.addTeams = addTeams;
			vm.deleteTeam = deleteTeam;
			vm.allTeams = [];
			vm.newTeam = {};

			function setTeams(data){
				vm.newTeam = {};
				vm.allTeams = data;
			}
			function addTeams(){
				teamFactory.addTeams(vm.newTeam, setTeams);
			}
			function deleteTeam(index){
				teamFactory.deleteTeam(index, setTeams);
			}
		}


})();
