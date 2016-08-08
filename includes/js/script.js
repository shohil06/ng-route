
// create the module and name it SPA1
var SPA1 = angular.module('SPA1', []);

// create the controller and inject Angular's $scope
SPA1.controller('mainController', function($scope) {

    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    });
