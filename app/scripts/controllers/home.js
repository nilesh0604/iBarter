'use strict';

/**
 * @ngdoc function
 * @name iBarterApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the iBarterApp
 */
angular.module('iBarterApp')
    .controller('HomeCtrl', function($scope, productService, env) {

        $scope.newlyAddedProducts = [];

        $scope.imagePath = env.IMAGESPATH;

        function applyRemoteData(products) {
            $scope.newlyAddedProducts = products;
        }

        function getNewlyAddedProducts() {
            productService.getNewlyAddedProducts().then(function(products) {
                applyRemoteData(products);
            });
        }

        getNewlyAddedProducts();

    });
