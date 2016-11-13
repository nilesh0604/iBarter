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
        'mobile-angular-ui.gestures',
        'ngFileUpload'
    ])
    .run(function($transform) {
        window.$transform = $transform;
    })
    .config(function($routeProvider) {

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
                controllerAs: 'login',
                reloadOnSearch: false
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'register',
                reloadOnSearch: false
            })
            .when('/categories', {
                templateUrl: 'views/categories.html',
                controller: 'CategoriesCtrl',
                controllerAs: 'categories',
                reloadOnSearch: false
            })
            .when('/productList', {
                templateUrl: 'views/productlist.html',
                controller: 'ProductlistCtrl',
                controllerAs: 'productList',
                reloadOnSearch: false
            })
            .when('/product', {
                templateUrl: 'views/product.html',
                controller: 'ProductCtrl',
                controllerAs: 'product',
                reloadOnSearch: false
            })
            .when('/myProducts', {
                templateUrl: 'views/myproducts.html',
                controller: 'MyproductsCtrl',
                controllerAs: 'myProducts',
                reloadOnSearch: false
            })
            .when('/addProduct', {
                templateUrl: 'views/addproduct.html',
                controller: 'AddproductCtrl',
                controllerAs: 'addProduct',
                reloadOnSearch: false
            })
            .when('/updateProduct/:id', {
              templateUrl: 'views/updateproduct.html',
              controller: 'UpdateproductCtrl',
              controllerAs: 'updateProduct',
              reloadOnSearch: false
            })
            .when('/uploadPhotos/:id', {
              templateUrl: 'views/uploadphotos.html',
              controller: 'UploadphotosCtrl',
              controllerAs: 'uploadPhotos',
              reloadOnSearch: false
            })
            .otherwise({
                redirectTo: '/'
            });
    });
