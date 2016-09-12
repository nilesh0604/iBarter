'use strict';

/**
 * @ngdoc function
 * @name iBarterApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the iBarterApp
 */
angular.module('iBarterApp')
    .controller('MainCtrl', function($rootScope) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $rootScope.$on('$routeChangeStart', function() {
            $rootScope.loading = true;
        });

        $rootScope.$on('$routeChangeSuccess', function() {
            $rootScope.loading = false;
        });
    });
