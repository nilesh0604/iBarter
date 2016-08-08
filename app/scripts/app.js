'use strict';

/**
 * @ngdoc overview
 * @name iBarterApp
 * @description
 * # iBarterApp
 *
 * Main module of the application.
 */
angular
  .module('iBarterApp', [
    'ngRoute',
    'mobile-angular-ui',
    'mobile-angular-ui.gestures'
  ])
  .run(function($transform){
    window.$transform = $transform;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        reloadOnSearch: false
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
