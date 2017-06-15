function dueDateFilter() {
    return function(dueDate) {
        return moment(dueDate).format('DD-MM-YYYY hh:mm:ss a');
    };
}

function completedFilter() {
    return function(completedValue, $scope) {
        if ( completedValue ) {
            $scope.completedClass = 'success';
        } else {
            $scope.completedClass = 'danger';
        }

        return completedValue;
    }
}

myApp
    .filter('dueDateFilter', dueDateFilter)
    .filter('completedFilter', completedFilter);