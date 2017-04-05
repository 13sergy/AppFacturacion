var app = angular.module('facturacionApp',
    [
        'ngRoute',
        'facturacionApp.configuracion',
        'facturacionApp.mensajes',
        'facturacionApp.notificaciones',
        'facturacionApp.clientes',
        'facturacionApp.clientesCtrl',
        'facturacionApp.dashboardCtrl'
    ]);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'dashboard/dashboard.html',
            controller: 'dashboardCtrl'
        })
        .when('/clientes/:pag', {
            templateUrl: 'clientes/clientes.html',
            controller: 'clientesCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });


});
app.controller('mainCtrl', [
    '$scope',
    'Configuracion',
    'Mensajes',
    'Notificaciones', function ($scope, Configuracion, Mensajes, Notificaciones) {

        $scope.config = {}; // Configuracion inicial de la App. Autor, Version, etc
        $scope.mensajes = Mensajes.mensajes; // Mensajes del usuario logueado
        $scope.notificaciones = Notificaciones.notificaciones; // Notificaciones del usuario logueado

        // console.log($scope.notificaciones);
        /**
         * Objeto que contiene los datos del usuario registrado en la pagina.
         * @type {{nombre: string, apellido: string}}
         */
        $scope.usuario = {
            "nombre": "Juan Carlos",
            "apellido": "Casillas"
        };

        Configuracion.cargar().then(function () {
            $scope.config = Configuracion.config.data;
        });

    //    FUNCIONES GLOBALES
        $scope.activar=function (menu, submenu) {
            $scope.mDashboard="";
            $scope.mClientes="";
            $scope[menu] = 'active';
        }

    }]);

/**
 * Filtro que elimina la primera letra de la palabra que se le pasa como parametro y la devuelve.
 */
app
    .filter('QuitarLetra', function () {
        return function (palabra) {
            if (palabra) {
                if (palabra.length > 1) {
                    return palabra.substr(1);

                } else return palabra;
            }
        }
    })
    .filter('MensajeCorto', function () {
        var maxLength = 35;
        return function (mensaje) {
            if (mensaje) {
                if (mensaje.length > maxLength) {
                    return mensaje.substr(0, maxLength) + "...";

                } else return mensaje;
            }
        }
    })
    .filter('NotificacionCorta', function () {
        var maxLength = 35;
        return function (notificacion) {
            if (notificacion) {
                if (notificacion.length > maxLength) {
                    return notificacion.substr(0, maxLength) + "...";

                } else return notificacion;
            }
        }
    })

