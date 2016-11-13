'use strict';

/**
 * @ngdoc function
 * @name iBarterApp.controller:AddproductCtrl
 * @description
 * # AddproductCtrl
 * Controller of the iBarterApp
 */
angular.module('iBarterApp')
    .controller('AddproductCtrl', function($scope, productService, $location) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.sectionLoading = false;
        //$scope.product;

        $scope.addNewProduct = function() {
            $scope.sectionLoading = true;
            productService.addNewProduct($scope.product).then(function(product) {
                $scope.sectionLoading = false;
                $location.path('/uploadPhotos/'+ product._id);
            });
        };
    });
