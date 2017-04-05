var app = angular.module('facturacionApp.clientesCtrl', []);
app.controller('clientesCtrl', ['$scope', '$routeParams', 'Clientes', function ($scope, $routeParams, Clientes) {
    var pag = $routeParams.pag;
    console.log(pag);
    $scope.activar('mClientes');

    $scope.clientes = {};

    // Clientes.cargarPagina(pag).then(function (data) {
    //     // console.log("CTRL"+ data);
    //     $scope.clientes = Clientes;
    //     // $scope.clientes = data;
    //     console.log(Clientes);
    // });
    $scope.moverA = function (pag) {
        Clientes.cargarPagina(pag).then(function () {
            $scope.clientes = Clientes;
        });
    };
    $scope.moverA(pag);
}]);