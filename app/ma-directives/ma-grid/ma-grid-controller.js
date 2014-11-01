/**
 * Created by Girish Khosla on 11/1/2014.
 */
angular.module('maGrid',['ngRoute'])
    .directive('magrid', function () {
    return {
        restrict: 'E',
        transclude:true,
        scope:
        {
            src: '='
        },
        controller: function ($scope) {
            $scope.cols= [];
            this.addcolumn = function (title) {
                $scope.cols.push(title);
            };
        },
        templateUrl:'ma-directives/ma-grid/ma-grid.html'
    }
});
angular.module('maGrid').directive('macolumn', function () {
    return {
        require: '^magrid',
        restrict: 'E',
        scope:
        {
            title:'@'
        },

        link: function (scope, element, attrs, magridCtrl) {
            magridCtrl.addcolumn(scope.title);
        }
    }
});