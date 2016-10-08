'use strict';

/**
 * @ngdoc function
 * @name iBarterApp.controller:MyproductsCtrl
 * @description
 * # MyproductsCtrl
 * Controller of the iBarterApp
 */
angular.module('iBarterApp')
    .controller('MyproductsCtrl', function($scope, productService, env) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.showContent = false;

        $scope.newlyAddedProducts = [];

        $scope.imagePath = env.IMAGESPATH;

        function getNewlyAddedProducts() {
            $scope.sectionLoading = true;
            $scope.showContent = false;
            productService.getNewlyAddedProducts().then(function(products) {
                $scope.newlyAddedProducts = products;
                $scope.sectionLoading = false;
                $scope.showContent = true;
            });
        }

        $scope.removeProduct = function(id) {
            $scope.sectionLoading = true;
            productService.removeProduct(id).then(function() {
                var product = angular.element(document.getElementById(id));
                product.remove();
                $scope.sectionLoading = false;
            });
        };

        getNewlyAddedProducts();
    });
