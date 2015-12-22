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
  .controller('ClientsController',['$scope', 'uiGridConstants','ClientsServei','$http', function ($scope, uiGridConstants,ClientsServei,$http) {
    $scope.clientsPage=function(){

      $http.get('http://localhost:8080/tfc/rest/holaMon/json').success(function(data) {
        $scope.gridOptions.data= data;
      });

      $scope.crear = function(client){
      $http.post('http://localhost:8080/tfc/rest/holaMon/json', client).success(function(){
          $scope.gridOptions.data.push({
            'dni':String(client.dni),
            'nom':String(client.nom),
            'tipusClient':String(client.tipusClient),
            'naturalesaJuridica':String(client.naturalesaJuridica)
          });
        });
      };

      $scope.llegir=function(dni){

        $http.get('http://localhost:8080/tfc/rest/holaMon/json/'+dni).success(function(data){
          $scope.client.nom=data.nom;
          $scope.client.dni=data.dni;
          $scope.client.tipusClient=data.tipusClient;
          $scope.client.naturalesaJuridica=data.naturalesaJuridica;

        });
      };

      $scope.esborrar=function(dni){
       $http.delete('http://localhost:8080/tfc/rest/holaMon/json/'+dni).success(function(){
          $scope.gridOptions.data.splice($scope.indexSeleccionat,1);
        });

      };

      $scope.actualitzar=function(client){
       $http.put('http://localhost:8080/tfc/rest/holaMon/json/'+client.dni,client).success(function(){
          $scope.gridOptions.data[$scope.indexSeleccionat].nom=String(client.nom);
          $scope.gridOptions.data[$scope.indexSeleccionat].tipusClient=String(client.tipusClient);
          $scope.gridOptions.data[$scope.indexSeleccionat].naturalesaJuridica=String(client.naturalesaJuridica);
        });
      }

    };


    $scope.gridOptions = {
      enableFiltering: true,
      enableRowSelection: true,
      enableRowHeaderSelection: false,
      multiSelect: false,
      modifierKeysToMultiSelect: false,
      noUnselect: false,
      columnDefs: [
        {field: 'dni', displayName:'DNI',width: '*'},
        {field: 'nom', displayName:'Nom',width: '*'},
        {field: 'tipusClient', displayName:'Tipus Client',width: '*'},
        {field: 'naturalesaJuridica', displayName:'Naturalesa Jurídica',width: '*'}

      ],
      onRegisterApi: function(gridApi){
        $scope.gridApi = gridApi;
        gridApi.selection.on.rowSelectionChanged($scope,function(row) {
          $scope.caca=row.entity.dni;
          $scope.dniClientSeleccionat=row.entity.dni;
          $scope.indexSeleccionat=$scope.gridOptions.data.indexOf(row.entity);
        });
      }
    }
  }]);
