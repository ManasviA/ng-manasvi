/**
 * Created by Girish Khosla on 11/1/2014.
 */
angular.module('maList',['ngRoute'])
    .directive('malist', function () {
        return {
            restrict: 'E',
            scope: {
                src: '='
            },
            templateUrl: 'ma-directives/ma-list/ma-list.html'
        }
    });