var app = angular.module('facturacionApp.mensajes', []);
app.factory('Mensajes', ['$http', '$q', function ($http, $q) {

    var self = {
        mensajes:[{
            img:'dist/img/user6-128x128.jpg',
            nombre: 'Juan Carlos',
            mensaje: 'Bienvenido a la web',
            fecha:'5-Marzo'
        },{
            img:'dist/img/user4-128x128.jpg',
            nombre: 'Maria Soto',
            mensaje: 'Te envio los resultados de la prueba que hicimos en la web',
            fecha:'6-Marzo'
        },{
            img:'dist/img/user3-128x128.jpg',
            nombre: 'Marisa Torres',
            mensaje: 'Presupuestos Marzo',
            fecha:'7-Marzo'
        }]
    };

    return self;
}]);