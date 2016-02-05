/**
 * Created by Manasvi Arya on 11/1/2014.
 */
'use strict';

angular.module('engManasvi.layoutDemo', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/layout', {
            templateUrl: 'layoutDemo/layoutDemo.html',
            controller: 'LayoutDemoCtrl'
        });
    }])

    .controller('LayoutDemoCtrl', ['$scope',function($scope) {
        $scope.userdata = ['Manasvi', 'Sushrut','Jaydeep'];
        $scope.bardata = [50, 80, 70];
    }]);