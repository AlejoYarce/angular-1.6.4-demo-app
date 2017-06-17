myApp.controller('secondController', ['$scope', 'usSpinnerService', 'appService',
    function ($scope, usSpinnerService, appService) {

        usSpinnerService.spin('spinner-1');

        $scope.infoLoaded = false;
        $scope.header = {
            firstCol : 'Id',
            secondCol : 'User Names',
            thirdCol : 'Password'
        };   

        appService.getUsers().then(function (resultObject) {
            usSpinnerService.stop('spinner-1');

            var data = [];
            var dataObject = {};

            resultObject.data.map(function(item) {
                dataObject = {};
                dataObject.firstData = item.ID;
                dataObject.secondData = item.UserName;
                dataObject.thirdData = item.Password;

                data.push(dataObject);
            });

            $scope.result = data;
            $scope.infoLoaded = true;
            $scope.total = resultObject.count;
        });
}]);