// criar uma calculadora automatica.
// laço de repeticao (FOR).


function cliqueAqui () {

    var numeroIncial = parseFloat(prompt("digite seu Valor Inicial : " ));
    var numeroRazao = parseFloat(prompt("Digite seu Valor Final : "));     
    var resultados = [];
    
    for( var conta = 1; conta <= 10; conta++){
        resultados.push(numeroIncial); 
        numeroIncial += numeroRazao;
    } 
    alert("Resultado:  \n"+resultados.join("  "));
}