const limparFormulario = (endereco) =>{
    document.getElementById('logradouro').value = ' ';
    document.getElementById('bairro').value = ' ';
    document.getElementById('localidade').value = ' ';
    document.getElementById('uf').value = ' ';
}
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('localidade').value = endereco.localidade;
    document.getElementById('uf').value = endereco.uf;
}
const eNumero = (numero) => /^[0-9]+$/.test(numero);//Aqui estamos validando apenas numeros
const cepValido = (cep) => cep.length == 8 && eNumero(cep);// aqui estamos validando se esta correto a quantdade de numeros e se for so numeros
const pesquisarCep = async() => {
    limparFormulario();// aqui é uma função pra limpar o formulario
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if(cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if(endereco.hasOwnProperty('erro')){
            alert("CEP não encontrado!!");
            //console.log(endereco);
        }else{
            preencherFormulario(endereco);
        }
    }else{
        alert("CEP inválido!!");
    }    
}

function enviar(){console.log(document.getElementById('cep').value);}//funcao de click

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);