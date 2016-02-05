/**
 * Created by Manasvi Arya on 11/1/2014.
 */
'use strict';

angular.module('engManasvi.gridDemo', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/grid', {
            templateUrl: 'gridDemo/gridDemo.html',
            controller: 'GridDemoCtrl'
        });
    }])

    .controller('GridDemoCtrl', ['$scope',function($scope) {
        $scope.userdata = [{ 'uid': '1', 'uname': 'Manasvi',"email":"manasvi.arya@gmail.com" },
                            { 'uid': '2', 'uname': 'Sushrut',"email":"sushrut@yahoo.com" },
                            {'uid':'3','uname':'Tanmay', "email":"tanmay@rediffmail.com"},
                            {'uid':'4','uname':'Pete',"email":"pete@ymail.com"}];
    }]);