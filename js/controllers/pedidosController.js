
pedidosApp.controller('pedidosController', ['$scope','pedidosService', function($scope, pedidosService) {
    
    // controller utils

    function initData() {
        pedidosService.getPedidos()
            .then(function(response) {
                $scope.pedidos = response.data.pedidos;
            })
            .catch(function() {
                console.log('Something go wrong...')
            })
    }

    // controller data

    $scope.pedidos = []

    initData();

    // controller events

    $scope.addPedido = function(pedido) {

        $scope.pedidos.push(Object.assign({}, pedido))

    }

    $scope.removePedido = function(pedido) {
        
        let pedidoIndex = $scope.pedidos.indexOf(pedido)

        $scope.pedidos.splice(pedidoIndex, 1)
    }

    $scope.editPedido = function(pedido) {
        
        pedido.editable = true;
    }

    $scope.confirmEdit = function(pedido) {
        
        pedido.editable = false
    }


}])