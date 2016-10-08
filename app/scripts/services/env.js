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
  //var openshiftHost = 'http://ibarterapi2-nilesh.rhcloud.com/';
  var heroku = 'https://ibarterapi.herokuapp.com/';
  //var localhost = 'http://localhost:5000/';

  return {
  	IMAGESPATH: myHost+'ibarter/images/',
  	IBARTERAPIURL: heroku+'api/'
  };
})());
