class Pedidos {
    constructor(numeroPedido, nomeCliente, dataPedido, estaPago, listaPedido){
        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = dataPedido;
        this.estaPago = estaPago;
        this.listaPedido = listaPedido;
    }
}

const pedido = new Pedidos('01', 'Lucas', new Date( ).toLocaleDateString( ), false, []);

console.log(pedido);