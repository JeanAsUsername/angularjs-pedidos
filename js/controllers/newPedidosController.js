
pedidosApp.controller('newPedidosController', function($scope, $log) {

    // controller utils

    function clearPedidosInputs() {
        $scope.pedido.title = '';
        $scope.pedido.description = '';
    }

    function pedidoValidation(pedido) {

        if (!pedido.title || !pedido.description) return false;
        return true;
    }

    // controller data

    $scope.pedido = {
        title: '',
        description: '',
        editable: false
    }

    // controller events

    $scope.fireAddPedido = function (pedido) {

        let thePedidoIsValid = pedidoValidation(pedido);

        (thePedidoIsValid) ? $scope.addPedido(pedido) : alert('El pedido es invalido')

        clearPedidosInputs();
    }
    
})