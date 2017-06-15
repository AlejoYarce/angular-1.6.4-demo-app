myApp.controller('secondController', ['$scope', function($scope) {

    $scope.name = '';

    $scope.getName = function(userName) {
        $scope.name = userName;

        return $scope.name;
    }

}]);