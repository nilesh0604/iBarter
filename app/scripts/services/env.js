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

  var myHost = 'http://www.nileshshinde.com/';
  var openshiftHost = 'http://ibarterapi2-nilesh.rhcloud.com/';
  //var localhost = 'http://localhost:8080/';

  return {
  	IMAGESPATH: myHost+'ibarter/images/',
  	IBARTERAPIURL: openshiftHost+'api/'
  };
})());
