'use strict';

// Declare app level module which depends on views, and components
angular.module('engManasvi', [
    'ngRoute',
    'maGrid',
    'maBar',
    'maList',
    'maLayout',
    'engManasvi.home',
    'engManasvi.gridDemo',
    'engManasvi.barDemo',
    'engManasvi.listDemo',
    'engManasvi.layoutDemo',
    'engManasvi.version'
]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
