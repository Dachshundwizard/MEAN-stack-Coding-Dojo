app.controller('indexController', ['$scope', 'friendsFactory', function($scope, friendsFactory) {
    $scope.friends = [];

    $scope.delete = function(id) {
        friendsFactory.delete(id, getFriends);
    }

    function getFriends() {
        friendsFactory.index(function(data) {
            $scope.friends = data;
        });
    }
    getFriends();
}])
