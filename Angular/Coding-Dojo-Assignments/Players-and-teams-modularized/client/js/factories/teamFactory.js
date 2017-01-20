(function(){

	angular
		.module("myApp")
		.factory("teamFactory", teamFactory);

		function teamFactory(){
			var teamObj = [];
			var factory = {
				addTeams: addTeams,
				deleteTeam: deleteTeam,
				getTeams: getTeams
			};
			return factory;

			function addTeams(newTeam, callback){
				teamObj.push(newTeam);
				callback(teamObj);
			}
			function deleteTeam(index, callback){
				teamObj.splice(index,1);
				callback(teamObj);
			}
			function getTeams(callback){
				callback(teamObj);
			}
		}

})();