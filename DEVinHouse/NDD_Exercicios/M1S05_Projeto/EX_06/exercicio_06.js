class Pedidos {
    constructor(numeroPedido, nomeCliente, estaPago, quantidade, valor){
        this.numeroPedido = numeroPedido;
        this.nomeCliente = nomeCliente;
        this.dataPedido = new Date( ).toLocaleDateString( );
        this.estaPago = estaPago;
        this.listaPedido = [];
        this.quantidade = quantidade;
        this.valor = valor;
        
    }
    adicionarProduto(produto, preco){ 
           this.listaPedido.push(produto, preco);
           
        }
    calcularTotal(){
        let valorTotal= 0;
        this.listaPedido.forEach(preco => {
            valorTotal += preco.quantidade * preco.valor;
            this.valor = valorTotal;
        });
        return this.valor;
    }   
}
    
const pedido = new Pedidos('01', 'Lucas', false, []);
    
    pedido.adicionarProduto('mouse', 10.5);
    pedido.adicionarProduto('teclado', 10.9);
    pedido.quantidade = 10;
    pedido.calcularTotal();
console.log(pedido);

