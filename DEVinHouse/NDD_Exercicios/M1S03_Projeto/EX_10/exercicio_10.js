// criar uma calculadora automatica.
// laço de repeticao (FOR).


function cliqueAqui () {

    var numeroIncial = parseFloat(prompt("digite seu Valor Inicial : " ));
    var numeroRaiz = parseFloat(prompt("Digite seu Valor Final : "));     
    var resultados = '';
    
    for( var conta = 1; conta <= 10; conta++){
        resultados += numeroIncial; 
        numeroIncial += numeroRaiz;
    } 
    alert("Resultado:  \n\n"+resultados);
}