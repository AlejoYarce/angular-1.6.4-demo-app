myApp.service('appService', ['$http', function($http) {

    this.getActivities = function() {
        return $http.get('http://fakerestapi.azurewebsites.net/api/Activities')
            .then(function(result) {
                var count = 0;
                var resultObject = {
                    data : result.data,
                };

                _.filter(result.data, function(item) {
                    return item.Completed ? count++ : '';
                });

                resultObject.count = count;

                return resultObject;
            });
    }

    this.getUsers = function() {
        return $http.get('http://fakerestapi.azurewebsites.net/api/Users')
            .then(function(result) {
                var count = 0;
                var resultObject = {
                    data : result.data,
                };

                _.filter(result.data, function(item) {
                    return count++;
                });

                resultObject.count = count;

                return resultObject;
            });
    }
}]);