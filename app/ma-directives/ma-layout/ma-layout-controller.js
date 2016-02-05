/**
 * Created by Girish Khosla on 11/1/2014.
 */
angular.module('maLayout',['ngRoute']).directive('maLayout',function () {
    return {
        restrict: 'E',
        scope: true,
        transclude: true,
        controller: function ($scope, $element, $compile,$attrs) {
            $scope.rows = $attrs.rows;
            $scope.cols = $attrs.cols;
            var panes = $scope.panes = [];
            var i = 0;
            var mwidth = 100 / $scope.cols;
            var mheight = 100 / $scope.rows;
            var parent = $element.parent();
            this.addpane = function (panetitle,panecontent) {
                var mtop = Math.floor(i / parseInt($scope.cols)) * (100 / parseInt($scope.rows));
                var mleft = (i % $scope.cols) * (100 / $scope.cols);
                i++;
                var e = $('<div></div>');
                e.css("top", mtop + "%");
                e.css("left", mleft + "%");
                e.css("width", mwidth + "%");
                e.css("height", mheight + "%");
                e.css("position", "absolute");
                e.addClass("layoutpane");
                e.append(panecontent);
                console.log($scope);
                var x = $compile(e)($scope.$parent);
                parent.append(x);
            }
        },
        templateUrl:'ma-directives/ma-layout/ma-layout.html'
    }
});
angular.module('maLayout').directive('maPane',function(){
    return{
        require: '^maLayout',
        restrict:'E',
        transclude:'element',
        scope:
        {
            title:'@'
        },
        link: function (scope, el, attrs, ctrl, $transclude) {
            var i;
            $transclude(function (clone) {
                i = clone.html();

            });
            ctrl.addpane(scope.title,i);
        }
    }
});