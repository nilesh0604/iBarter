'use strict';

/**
 * @ngdoc service
 * @name iBarterApp.env
 * @description
 * # env
 * Constant in the iBarterApp.
 */
angular.module('iBarterApp')
  .constant('env', (function() {

  var myHost = "http://www.nileshshinde.com/";

  return {
  	IMAGESPATH: myHost+'ibarter/images/'
  }
})());
