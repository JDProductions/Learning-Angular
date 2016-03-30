var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$log', function($scope, $filter, $log) {
    
    $scope.handle = '';
    $scope.lowercasehandle = function() {                               
        return $filter('lowercase')($scope.handle);
    };
    
    $scope.$watch('handle' ,function(newValue, oldValue){
        $log.info('Changed!');
        $log.log('Old' + oldValue);
        $log.log('New' + newValue);
    });
    
    // This is a function outside of angular js
    // To make this easier you could just add the timeout dependency
    setTimeout(function(){
        // How to let angular know to start a digest cycle
        $scope.$apply(function()  {
        $scope.handle = 'newtwitterhandle';
        console.log('Scope changed!');
            }); // end digest cycle
    } ,3000);

}]);
