app.controller('newController', ['$scope', 'friendsFactory', '$location', function($scope, friendsFactory, $location) {
    $scope.friend = {};

    $scope.create = function() {
        friendsFactory.create($scope.friend, function(data) {
            $location.url(`/show/${data._id}`);
        });
    }
}])
