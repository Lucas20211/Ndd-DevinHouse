contasClientes = [{
        id: 1,
        saldo: 500,
    },
    {
        id: 2,
        saldo: 30000,
    },
    {
        id: 3,
        saldo: 50,
    },
];
// criando uma variavel'atualizaSaldo' onde recebe os valores do array de'contasClientes' e inicia uma funcao '.map' para scannear os objetos dentro dela e
// Fazer uma comparação de 'id' para que possa ser escrito em tela pro usuario um novo valor 
// entao o array 'contasClientes' recebe ele mesmo sendo mapeado com vaor diferente a cada processo que o usuario efetua
const atualizaSaldo = (id, saldo) => {
    contasClientes = contasClientes.map(conta => (conta.id === id ? {...conta,saldo} : conta));
    console.log(`Seu saldo atual é: ${saldo}`);

};
// Criando a variavel 'Saque' onde recebe os valores dentro do array de 'contasClientes' e inicia uma função para verificar se o 'id' digitado a baixo for igual ao 'id' existente.
//Logo faz uma comparacao onde 'valor' que o usuario digitou for menor ou igual a zero entao é invalido
//e logo no else if = se o valor for maior que (clienteId esta recebendo os valores do array de 'contasClientes') 'clienteId.saldo' entao tambem é invalido
// o prox else if = se o valor for maior que '0' E menor que o saldo do clienteId entao é verdadeiro logo faca o calculo
// const saldo esta recebendo o calculo de diminuicao
//  e como foi criado a funcao de atualizacao de saldo acima o contasCliente recebe um novo valor dentro do saldo de seu respectivo 'id'
const saque = (id, valor) => {
    let clienteId = contasClientes.find(cliente => cliente.id === id);
    if (valor <= 0) {
        console.log(`Valor Inválido!`)
    } else if (valor > clienteId.saldo) {
        console.log("Saldo Insuficiente!");
        console.log("Saldo Atual: " + clienteId.saldo);
    } else if (valor > 0 && valor < clienteId.saldo) {
        console.log(`Saque Realizado Com Sucesso!`)
        const saldo = clienteId.saldo - valor;
        atualizaSaldo(id, saldo);
    }
}
// criando uma variavel 'deposito' que recebe os valores de dentro do array de 'contasClientes' e faz uma busca para verificar se 'id' for igual ao 'id'
// e depois faz uma comparacao com o valor recebido do usuraio  e se o valor for verdadeiro ele calcula o saldo do cliente mais o valor que o usuario depositou
const deposito = (id, valor) => {
    let clienteId = contasClientes.find(cliente => cliente.id === id);
    if (valor <= 0) {
        console.log(`Valor Inválido!`)
    } else if (valor > 0) {
        console.log(`Deposito Realizado Com Sucesso!`);
        const saldo = clienteId.saldo + valor;
        atualizaSaldo(id, saldo);
    }
}

// O Usuario esta adicionando e removendo dinheiro, a cada linha a baixo é feito um novo calculo com as funções acima
console.log("primeiro"); // confirmando a ordem de cada funcao , pra fins educativos e de percepção.
saque(3, -10)
console.log("segundo");
deposito(3, 50);
console.log("terceiro");
saque(3, 20);
console.log("quarto");
saque(3, 90);