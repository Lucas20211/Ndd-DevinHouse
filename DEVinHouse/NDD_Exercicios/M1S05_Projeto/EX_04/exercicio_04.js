class Pedidos {
    numeroPedido;
    nomeCliente;
    dataPedido;
    estaPago;
    listaPedido;
}

const pedido = new Pedidos();

pedido.numeroPedido = '01';
pedido.nomeCliente = "Lucas";
pedido.dataPedido = new Date( ).toLocaleDateString( );
pedido.estaPago = false;
pedido.listaPedido = [];



console.log(pedido);