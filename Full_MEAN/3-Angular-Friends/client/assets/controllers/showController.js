app.controller('showController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, params, $location) {
    $scope.friend = {};

    $scope.delete = function(id) {
        friendsFactory.delete(id, function() {
            $location.url('/');
        });
    }

    friendsFactory.show(params.id, function(data) {
        $scope.friend = data;
    });
}])
