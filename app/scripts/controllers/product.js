'use strict';

/**
 * @ngdoc function
 * @name iBarterApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the iBarterApp
 */
angular.module('iBarterApp')
    .controller('ProductCtrl', function($scope, productService, $routeParams) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.sectionLoading = true;
        $scope.product = {};

        function getProductInfo() {
        	$scope.sectionLoading = true;
        	productService.getProductById($routeParams.id).then(function(product) {
        		console.log(product);
                $scope.product = product;
                $scope.sectionLoading = false;
            });
        }

        getProductInfo();
    });
