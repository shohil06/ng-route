// create the module and name it SPA1
var SPA1 = angular.module('SPA1', ['ngRoute']);
SPA1.config(function($routeProvider) {
  $routeProvider
  .when('/', {
      templateUrl : '../../pages/home.html',
      controller  : 'mainController'
  })

  // route for the about page
  .when('/about', {
      templateUrl : '../../pages/about.html',
      controller  : 'aboutController'
  })

  // route for the contact page
  .when('/contact', {
      templateUrl : '../../pages/contact.html',
      controller  : 'contactController'
  });
});

// create the controller and inject Angular's $scope
SPA1.controller('mainController', function($scope) {
    $scope.message = 'Everyone come and see how good I look!';
    });
SPA1.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
    });
SPA1.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    });
