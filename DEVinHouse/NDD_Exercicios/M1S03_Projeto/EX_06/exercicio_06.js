// ESCREVER ULTIMO SOBRENOME  COLOCAR NA CAIXA DE ALERTA COM A QUANTIDADE DE LETRAS


function cliqueAqui (){
    
    var sobreNome = prompt("Sobrenome:").toUpperCase();

    var letrasSobrenome = sobreNome;
    var contadorLetras = 0;

    for(var i = 0; i < letrasSobrenome.length; i++){
        contadorLetras++;         
    }
    alert("Olá, " +sobreNome+ " Seu sobrenome contém " +contadorLetras+ " Letras");
}