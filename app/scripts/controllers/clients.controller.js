'use strict';

/**
 * @ngdoc function
 * @name erpApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the erpApp
 */
angular
  .module('ClientsModule')
  .controller('ClientsController',['$scope', 'uiGridConstants','ClientsServei', function ($scope, uiGridConstants,ClientsServei) {
    $scope.holaMon=ClientsServei.query();
    $scope.gridOptions = {
      enableFiltering: true,
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      multiSelect: false,
      modifierKeysToMultiSelect: false,
      noUnselect: false,


      onRegisterApi: function(gridApi){
        $scope.gridApi = gridApi;
      },
      columnDefs: [
        {field: 'dni', displayName:'DNI',width: '*'},
        {field: 'nom', displayName:'Nom',width: '*'},
        {field: 'tipusClient', displayName:'Tipus Client',width: '*'},
        {field: 'naturalesaJuridica', displayName:'Naturalesa Jurídica',width: '*'}

      ],
      /**data: $scope.myData = [
        {
          "dni": "43533980v",
          "nom": "Eugenio",
          "tipusClient": "laboral",
          "naturalesaJuridica": "física"
        },
        {
          "dni": "43533981v",
          "nom": "Lucía",
          "tipusClient": "jurídico",
          "naturalesaJuridica": "física"
        },
        {
          "dni": "43533982v",
          "nom": "Fina",
          "tipusClient": "contable",
          "naturalesaJuridica": "empresa"
        }
      ]*/
      data: $scope.myData=$scope.holaMon

    }
  }]);

