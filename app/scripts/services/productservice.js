'use strict';

/**
 * @ngdoc service
 * @name iBarterApp.productService
 * @description
 * # productService
 * Service in the iBarterApp.
 */
angular.module('iBarterApp')
    .service('productService', function($http, $q, env) {
        // AngularJS will instantiate a singleton by calling "new" on this function


        // I get all of the newly added products in the remote collection.
        function getNewlyAddedProducts() {
            var request = $http({
                method: 'GET',
                url: env.IBARTERAPIURL+'products',
                //url: 'data/data.json',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return (request.then(handleSuccess, handleError));
        }

        function addNewProduct(product) {
            var request = $http({
                method: 'POST',
                url: env.IBARTERAPIURL+'products',
                data: product,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return (request.then(handleSuccess, handleError));
        }

        function getProductById(id) {
            var request = $http({
                method: 'GET',
                url: env.IBARTERAPIURL+'products/'+id,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return (request.then(handleSuccess, handleError));
        }

        function updateProduct(product) {
            var request = $http({
                method: 'PUT',
                url: env.IBARTERAPIURL+'products',
                data: product,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return (request.then(handleSuccess, handleError));
        }

        function updateProductImages(product) {
            var request = $http({
                method: 'PUT',
                url: env.IBARTERAPIURL+'updateImages',
                data: product,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return (request.then(handleSuccess, handleError));
        }

        function removeProduct(id) {
            var request = $http({
                method: 'DELETE',
                url: env.IBARTERAPIURL+'products/'+id,
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            return (request.then(handleSuccess, handleError));
        }

        // I transform the successful response, unwrapping the application data
        // from the API response payload.
        function handleSuccess(response) {
            return (response.data);
        }


        // I transform the error response, unwrapping the application dta from
        // the API response payload.
        function handleError(response) {


            // The API response from the server should be returned in a
            // nomralized format. However, if the request was not handled by the
            // server (or what not handles properly - ex. server error), then we
            // may have to normalize it on our end, as best we can.
            if (!angular.isObject(response.data) ||
                !response.data.message
            ) {
                return ($q.reject('An unknown error occured.'));
            }
        }

        // Otherwise, use expected error message.
        return ({
            getNewlyAddedProducts: getNewlyAddedProducts,
            addNewProduct: addNewProduct,
            removeProduct: removeProduct,
            updateProduct: updateProduct,
            getProductById: getProductById,
            updateProductImages: updateProductImages
        });
    });
