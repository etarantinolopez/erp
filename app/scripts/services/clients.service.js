'use strict';

/**
 * @ngdoc service
 * @name erpApp.clients.service
 * @description
 * # clients.service
 * Service in the erpApp.
 */
angular
  .module('ClientsModule')
  /**.service('clients.service', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

  });*/
/**.factory('ClientsServei',['$resource',function($resource){
    return $resource('http://localhost:8080/tfc/rest/holaMon',{},{
      get:{method:'GET'}
    });
  }]);*/
  .factory('ClientsServei',['$resource',function($resource){
    return $resource('http://localhost:8080/tfc/rest/holaMon/json');
  }]);
