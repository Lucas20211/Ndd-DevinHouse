class Pedidos {
    constructor(numeroPedido, nomeCliente, estaPago, listaPedido){
        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = new Date( ).toLocaleDateString( );
        this.estaPago = estaPago;
        this.listaPedido = listaPedido;
    }
}

const pedido = new Pedidos('01', 'Lucas',  false, []);

console.log(pedido);