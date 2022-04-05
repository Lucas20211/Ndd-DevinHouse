class Produto {
    constructor( codigoProduto, nomeProduto, precoProduto,quantiProduto){
        this.codigoProduto = codigoProduto;
        this.nomeProduto = nomeProduto;
        this.precoProduto = precoProduto;
        this.quantiProduto = quantiProduto;
    }
}

const mouseProduto = new Produto('001', 'mouse', 50, 1);
const tecladoProduto = new Produto( '002', 'teclado', 100, 1);
const monitor = new Produto('003', 'monitor', 500, 1);
const mesa = new Produto('004', 'mesa', 400, 1);
const webcan =new Produto('005', 'webcan', 250, 1);


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
const pedido = new Pedidos('20220001', 'Lucas', true);
pedido.adicionarProduto(mouseProduto);
pedido.adicionarProduto(tecladoProduto);
pedido.adicionarProduto(mesa);
pedido.calculartotal();


const pedido2 = new Pedidos('202200022', 'Pedro', true);
pedido2.adicionarProduto(tecladoProduto);
pedido2.adicionarProduto(webcan);
pedido2.adicionarProduto(monitor);
pedido2.calculartotal();

console.log(pedido);
console.log(pedido2);
console.log("Valor do primeiro pedido: R$ " + pedido.calculartotal());
console.log("Valor do segundo pedido: R$ " + pedido2.calculartotal());

        
