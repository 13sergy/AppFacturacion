var app = angular.module('facturacionApp.notificaciones', []);
app.factory('Notificaciones', ['$http', '$q', function ($http, $q) {

    var self = {
        notificaciones: [
            {
                icono: 'fa-user',
                notificacion: 'Nuevo usuario registrado',
                read:false
            }, {
                icono: 'fa-save',
                notificacion: '50% de disco utilizado',
                read:true

            }, {
                icono: 'fa-paper-plane',
                notificacion: 'El paquete será entregado mañana por la mañana en hora punta.',
                read:false

            }
        ]
    };

    return self;
}]);