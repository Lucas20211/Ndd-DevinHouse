// Crie um arquivo chamado exercicio09.ts crie uma interface chamada **Produto**, nela terá os atributos **nome:**string, **valor:**number, **codigo:** number, **quantidade:** number, **emEstoque:** boolean e apenas declare um método chamado *comprar()*, esse método é **opcional** e recebe como parâmetro *produto* do tipo *Produto* e *quantidade* do tipo number. Em um projeto angular, na pasta **assets** adicione o arquivo exercicio09.ts e siga as instruções abaixo:
// - No html do component ( app.component.html ) apague todo o código e cole esse código: 

// 	<h2>
//     		Total da compra: {{ valorTotal }}
// 	</h2>

// - Criar a variável *valorTotal* do tipo number no *app.component.ts*
// - A classe no *app.component.ts* deve ser implementada com a interface que criamos no arquivo exercicio09.ts, ou seja, faça a importação correta na classe.
// - Deverá ser declarado todos os atributos da interface com os devidos tipos e todos com o modificador privado.
// - Crie o objeto abaixo:

// 		sofa:Produto = {
// 	    nome: "Sofá 4 lugares",
// 	    valor: 120,
// 	    codigo: 1,
// 	    quantidade: 30,
// 	    emEstoque: true
// 	  };
// - Crie também o método *comprar()* com os seus parâmetros e implemente ele para que se o produto passado estiver em estoque ( emEstoque == true ) ele multiplique o valor do produto pela quantidade ( valor * quantidade ) e diminua essa quantidade, da quantidade do objeto criado no passo acima ( produto.quantidade  = produto.quantidade - quantidade ).
// No método **ngOnInit** chame a função *comprar()* passando como parâmetro o objeto *sofa* e *30*, na linha de baixo chame o mesmo método passando nos parâmetros novamente o objeto *sofa* e *10*.
// Rode o projeto com “ng serve” e veja o resultado em tela.
