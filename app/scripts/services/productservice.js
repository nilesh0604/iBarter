'use strict';

/**
 * @ngdoc service
 * @name iBarterApp.productService
 * @description
 * # productService
 * Service in the iBarterApp.
 */
angular.module('iBarterApp')
    .service('productService', function($http, $q) {
        // AngularJS will instantiate a singleton by calling "new" on this function


        // I get all of the newly added products in the remote collection.
        function getNewlyAddedProducts() {
            var request = $http({
                method: 'get',
                url: 'data/data.json',
                params: {
                    action: 'get'
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
            getNewlyAddedProducts: getNewlyAddedProducts
        });
    });
