'use strict';

/**
 * @ngdoc function
 * @name iBarterApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the iBarterApp
 */
angular.module('iBarterApp')
    .controller('ProductCtrl', function($scope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];


        $scope.initSlider = function() {
            $(function() {
                // wait till load event fires so all resources are available
                $('.flexslider').flexslider({
                    animation: "slide",
                    controlNav: "thumbnails"
                });
            });
        };

        $scope.initSlider();
    });
