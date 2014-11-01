/**
 * Created by Manasvi Arya on 11/1/2014.
 */
'use strict';

angular.module('engManasvi.listDemo', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/list', {
            templateUrl: 'listDemo/listDemo.html',
            controller: 'ListDemoCtrl'
        });
    }])

    .controller('ListDemoCtrl', ['$scope',function($scope) {
        $scope.userdata = ['Manasvi', 'Sushrut','Jaydeep'];
    }]);