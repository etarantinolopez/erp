'use strict';

/**
 * @ngdoc overview
 * @name erpApp
 * @description
 * # erpApp
 *
 * Main module of the application.
 */
angular
  .module('erpApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'MainCtrls',
    'ClientsModule',
    'ui.grid.selection',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../../views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/clients', {
        templateUrl: '../../views/clients.html',
        controller: 'ClientsController',
        controllerAs: 'client'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
