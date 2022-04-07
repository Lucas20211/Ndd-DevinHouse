
const preencherFormulario = (endereco) =>{
    document.getElementById('logradouro').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
}

const pesquisarCep = async() => {
    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco); 
}
function enviar(){console.log(document.getElementById('cep').value);}

document.getElementById('cep')
        .addEventListener('focusout', pesquisarCep);