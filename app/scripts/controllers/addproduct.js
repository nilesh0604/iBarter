'use strict';

/**
 * @ngdoc function
 * @name iBarterApp.controller:AddproductCtrl
 * @description
 * # AddproductCtrl
 * Controller of the iBarterApp
 */
angular.module('iBarterApp')
    .controller('AddproductCtrl', function($scope, productService) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //$scope.product;

        $scope.addNewProduct = function() {
            productService.addNewProduct($scope.product).then(function() {
            });
        };
    });
