var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
   $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
          })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
   
       .when('/second/', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
   
       .when('/third', {
        templateUrl: 'pages/third.html',
        controller: 'thirdController'
    })
});

myApp.controller('mainController', ['$scope', '$location', '$log', function($scope, $location, $log) {
    
  $scope.name = 'James';
    
}]);

myApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams' ,function($scope, $location, $log, $routeParams) {
    
  $scope.num = $routeParams.num || 1;
    
}]);

