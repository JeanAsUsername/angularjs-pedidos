
pedidosApp.factory('pedidosService', function($http) {
    return {
        getPedidos: function() {
            return $http({method: 'GET', url: 'components/data/pedidos.json'})
        }
    }
})