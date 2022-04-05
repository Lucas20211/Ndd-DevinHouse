class Produto {
    constructor( codigoProduto, nomeProduto, precoProduto,quantiProduto){
        this.codigoProduto = codigoProduto;
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
        this.quantiProduto = quantiProduto;
    }
}

const mouseProduto = new Produto('001', 'mouse', 50.40, 10.00);
const tecladoProduto = new Produto( '002', 'teclado', 100.50, 20);

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
const pedido = new Pedidos('01', 'Lucas', true);
        pedido.adicionarProduto(mouseProduto);
        pedido.adicionarProduto(tecladoProduto);

        console.log(pedido);
        
