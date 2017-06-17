myApp.controller('mainController',
    [
        '$scope',
        'usSpinnerService',
        'appService',
        '$filter',
    function (
        $scope,
        usSpinnerService,
        appService,
        $filter) {

        usSpinnerService.spin('spinner-1');

        $scope.infoLoaded = false;
        $scope.header = {
            firstCol : 'Title',
            secondCol : 'Due Date',
            thirdCol : 'Completed'
        };        

        appService.getActivities().then(function(resultObject) {
            usSpinnerService.stop('spinner-1');

            var data = [];
            var dataObject = {};

            resultObject.data.map(function(item) {
                dataObject = {};
                dataObject.firstData = item.Title;
                dataObject.secondData = $filter('dueDateFilter')(item.DueDate);
                dataObject.thirdData = $filter('completedFilter')(item.Completed, $scope);
                dataObject.completedClass = $scope.completedClass;

                data.push(dataObject);
            });

            $scope.result = data;
            $scope.infoLoaded = true;
            $scope.total = resultObject.count;
        });
    
}]);