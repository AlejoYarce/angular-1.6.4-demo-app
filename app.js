// MODULE
var myApp = angular.module('myApp',
    [
        'ngRoute',
        'angularSpinner'
    ]);

myApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
});