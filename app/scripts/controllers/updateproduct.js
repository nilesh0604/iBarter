'use strict';

/**
 * @ngdoc function
 * @name iBarterApp.controller:UpdateproductCtrl
 * @description
 * # UpdateproductCtrl
 * Controller of the iBarterApp
 */
angular.module('iBarterApp')
    .controller('UpdateproductCtrl', function($scope, productService, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.sectionLoading = true;

        function getProductInfo() {
        	$scope.sectionLoading = true;
        	productService.getProductById($routeParams.id).then(function(res) {
                $scope.product = res;
                $scope.sectionLoading = false;
            });
        }

        $scope.updateProductInfo = function() {
        	$scope.sectionLoading = true;
            productService.updateProduct($scope.product).then(function() {
                $scope.sectionLoading = false;
            });
        };

        getProductInfo();

    });
