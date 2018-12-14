
pedidosApp.directive('pedidosMain', function() {
    return {
        restrict: 'E',
        templateUrl: 'components/pedidos/pedidos.html',
        replace: true,
        controller: 'newPedidosController',
        scope: {
            pedidos: '=pedidosData',
            addPedido: '&',
            removePedido: '&',
            editPedido: '&',
            confirmEdit: '&'
        }
    }
})