'use strict';

describe('Controller: UploadphotosCtrl', function () {

  // load the controller's module
  beforeEach(module('iBarterApp'));

  var UploadphotosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UploadphotosCtrl = $controller('UploadphotosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UploadphotosCtrl.awesomeThings.length).toBe(3);
  });
});
