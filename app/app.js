'use strict';

// Declare app level module which depends on views, and components
var nutanixApp = angular.module('nutanixApp',['ngRoute','ngResource','angular-cache','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/dealsDetails',
    {
        templateUrl:'/app/dealsDetails/dealsDetails.html',

    });
  $routeProvider.otherwise({redirectTo: '/dealsDetails'});



}])
