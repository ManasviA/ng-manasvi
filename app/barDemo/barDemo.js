/**
 * Created by Girish Khosla on 11/1/2014.
 */
/**
 * Created by Manasvi Arya on 11/1/2014.
 */
'use strict';

angular.module('engManasvi.barDemo', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/bar', {
            templateUrl: 'barDemo/barDemo.html',
            controller: 'BarDemoCtrl'
        });
    }])

    .controller('BarDemoCtrl', ['$scope',function($scope) {
        $scope.students = ['Manasvi', 'Sushrut','Jaydeep'];
        $scope.marks = [50, 80, 70];
    }]);