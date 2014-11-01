/**
 * Created by Girish Khosla on 11/1/2014.
 */
angular.module('maBar', ['ngRoute'])
    .directive('maBar', function () {
        return {
            restrict: 'E',
            scope: {src: '=', legend: '=', max: '='},
            link: function (scope, element, attrs) {
                scope.trans = [];
                for (var i = 0; i < (scope.src.length); i++) {
                    var obj = new Object();
                    obj.width = scope.src[i] / scope.max * 100;
                    obj.legend = scope.legend[i];
                    scope.trans.push(obj);
                }
            },
            templateUrl: 'ma-directives/ma-bar/ma-bar.html'
        }
    });