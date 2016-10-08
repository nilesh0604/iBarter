'use strict';

/**
 * @ngdoc function
 * @name iBarterApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the iBarterApp
 */
angular.module('iBarterApp')
    .controller('HomeCtrl', function($scope, productService, env, $rootScope) {

        $scope.newlyAddedProducts = [];

        $scope.imagePath = env.IMAGESPATH;

        function getNewlyAddedProducts() {
            $rootScope.sectionLoading = true;
            productService.getNewlyAddedProducts().then(function(products) {
                $rootScope.sectionLoading = false;
                $scope.newlyAddedProducts = products;
            });
        }

        getNewlyAddedProducts();

    });
