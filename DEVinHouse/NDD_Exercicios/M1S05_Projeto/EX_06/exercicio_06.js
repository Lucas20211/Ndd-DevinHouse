class Produto {
    constructor( codigoProduto, nomeProduto, precoProduto,quantiProduto){
        this.codigoProduto = codigoProduto;
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
        this.quantiProduto = quantiProduto;
    }
}

const mouseProduto = new Produto('001', 'mouse', 50, 2);
const tecladoProduto = new Produto( '002', 'teclado', 100, 3);

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
    calculartotal(){
        let valortotal=0;
        this.listaPedido.forEach(produto => {
            valortotal += produto.quantiProduto * produto.precoProduto;
        });
        return valortotal;
    }
}
const pedido = new Pedidos('01', 'Lucas', true);
pedido.adicionarProduto(mouseProduto);
pedido.adicionarProduto(tecladoProduto);
pedido.calculartotal();


const pedido2 = new Pedidos('02', 'Pedro', true);
pedido2.adicionarProduto(tecladoProduto);
pedido2.calculartotal();

console.log(pedido);
console.log(pedido2);
console.log("Valor do primeiro pedido: R$ " + pedido.calculartotal());
console.log("Valor do segundo pedido: R$ " + pedido2.calculartotal());

        
