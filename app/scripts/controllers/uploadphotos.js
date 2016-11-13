'use strict';

/**
 * @ngdoc function
 * @name iBarterApp.controller:UploadphotosCtrl
 * @description
 * # UploadphotosCtrl
 * Controller of the iBarterApp
 */
angular.module('iBarterApp')
    .controller('UploadphotosCtrl', function($scope, Upload, $timeout) {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        var uploadedImages = [];

        var uploadCount = 0;

        $scope.allUploadFinished = false;

        $scope.updateImages = function () {
        	productService.getNewlyAddedProducts().then(function(products) {
                $scope.newlyAddedProducts = products;
                $scope.sectionLoading = false;
                $scope.showContent = true;
            });
        }

        $scope.uploadFiles = function(files, errFiles) {
            $scope.files = files;
            $scope.errFiles = errFiles;
            angular.forEach(files, function(file) {
                file.upload = Upload.upload({
                    url: 'http://localhost:5000/api/uploadImages',
                    data: { file: file }
                });

                file.upload.then(function(response) {
                    $timeout(function() {
                        console.log(response.data);
                        uploadedImages.concat(response.data.filesUploaded);
                        file.result = response.data;
                        uploadCount++;
                        if(uploadCount === $scope.files.length){
                        	$scope.allUploadFinished = true;
                        }
                    });
                }, function(response) {
                    if (response.status > 0)
                        $scope.errorMsg = response.status + ': ' + response.data;
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
        }
    });
