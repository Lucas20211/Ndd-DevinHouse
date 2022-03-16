// ESCREVER SOBRENOME E NOME E COLOCAR NA CAIXA DE ALERTA
// NOME E SOBRENOME NA ORDEM CERTA



function cliqueAqui (){
    
    var sobreNome;
    var nome;
    
    do {
        sobreNome = prompt("Qual seu sobrenome?  ");
        nome = prompt ("Qual seu nome?  ");
    }while
    (sobreNome == null || sobreNome == "");    
    (nome == null || nome == "");

    alert("Seu nome é ==> " + nome +" "+ sobreNome + " 😉 ");

}