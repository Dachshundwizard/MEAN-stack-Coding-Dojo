
app.controller('editController', ['$scope', 'friendsFactory', '$routeParams', '$location', function($scope, friendsFactory, params, $location) {
    $scope.friend = {};

    $scope.update = function() {
        friendsFactory.update($scope.friend, function(data) {
            $location.url(`/show/${data._id}`);
        });
    }
    $scope.delete = function(id) {
        friendsFactory.delete(id, function() {
            $location.url('/');
        });
    }
    // Fetch Friend from database
    friendsFactory.show(params.id, function(data) {
        data.dob = new Date(data.dob);
        $scope.friend = data;
    });
}]);
