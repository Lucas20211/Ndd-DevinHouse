class Pedidos {
    constructor(numeroPedido, nomeCliente, estaPago){
        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = new Date( ).toLocaleDateString( );
        this.estaPago = estaPago;
        this.listaPedido = [];
    }
    adicionarProduto(produto){ 
           this.listaPedido.push(produto);
        }   
}
    
const pedido = new Pedidos('01', 'Lucas', false, []);
    
    pedido.adicionarProduto('mouse');
    pedido.adicionarProduto('teclado');

console.log(pedido);
