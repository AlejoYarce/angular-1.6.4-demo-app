myApp.controller('mainController', ['$scope', '$http', function ($scope, $http) {

    $http.get('http://fakerestapi.azurewebsites.net/api/Activities')
        .then(function(result) {
            $scope.result = result.data;
        });
    
}]);