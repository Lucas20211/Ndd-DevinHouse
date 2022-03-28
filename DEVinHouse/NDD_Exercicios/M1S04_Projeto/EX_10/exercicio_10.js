contasClientes = [
    {
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

    const valor = 200;

    const add_saldo = function(valor){
        contasClientes.saldo += valor; 
    }
    const remover_saldo = function(valor){
        contasClientes.saldo -= valor;
    }
    const consultar_saldo = function(valor){
        console.log(`Saldo: ${contasClientes.saldo}`);
    }