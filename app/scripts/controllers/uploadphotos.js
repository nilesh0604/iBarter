'use strict';

/**
 * @ngdoc function
 * @name iBarterApp.controller:UploadphotosCtrl
 * @description
 * # UploadphotosCtrl
 * Controller of the iBarterApp
 */
angular.module('iBarterApp')
    .controller('UploadphotosCtrl', function($scope, Upload, $timeout, productService, env, $routeParams, $location) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var uploadedImages = [];

        var uploadCount = 0;

        $scope.allUploadFinished = false;
        $scope.sectionLoading = false;

        $scope.updateImages = function () {
        	var product = {};
        	product._id = $routeParams.id;
        	product.images = uploadedImages;
            $scope.sectionLoading = true;
        	productService.updateProductImages(product).then(function(product) {
                $scope.sectionLoading = false;
                $location.path('/product/'+ product._id);
            });
        };

        $scope.uploadFiles = function(files, errFiles) {
            $scope.files = files;
            $scope.errFiles = errFiles;
            angular.forEach(files, function(file) {
                file.upload = Upload.upload({
                    url: env.IBARTERAPIURL+'uploadImages',
                    data: { file: file }
                });

                file.upload.then(function(response) {
                    $timeout(function() {
                        if(uploadCount === 0){
                            uploadedImages = response.data.filesUploaded;
                        }
                        file.result = response.data;
                        uploadCount++;
                        if(uploadCount === $scope.files.length){
                        	$scope.allUploadFinished = true;
                        }
                    });
                }, function(response) {
                    if (response.status > 0){
                        $scope.errorMsg = response.status + ': ' + response.data;
                    }
                }, function(evt) {
                    file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    if(file.progress === 100){
                    	file.uploadFinished = true;
                    }
                    else{
                    	file.uploadFinished = false;
                    }  
                });
            });
        };
    });
