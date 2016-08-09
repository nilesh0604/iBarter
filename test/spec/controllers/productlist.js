'use strict';

describe('Controller: ProductlistCtrl', function () {

  // load the controller's module
  beforeEach(module('iBarterApp'));

  var ProductlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProductlistCtrl = $controller('ProductlistCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProductlistCtrl.awesomeThings.length).toBe(3);
  });
});
