'use strict';

/**
 * @ngdoc directive
 * @name iBarterApp.directive:imageSlider
 * @description
 * # imageSlider
 */
angular.module('iBarterApp')
    .directive('imageSlider', function() {
        return {
            restrict: 'E',
            templateUrl: 'views/imageslider.html',
            link: function postLink(scope, element, attrs) {
                angular.element(element).flexslider(scope.$eval(attrs.params));

                scope.$on('$destroy', function() {
                    element.flexslider('destroy');
                });
                /*element.text('this is the imageSlider directive');*/
            }
        };
    });
