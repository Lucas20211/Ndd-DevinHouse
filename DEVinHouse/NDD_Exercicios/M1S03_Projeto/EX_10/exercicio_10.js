// criar uma calculadora automatica.
// laço de repeticao (FOR).


function cliqueAqui () {

    var numeroIncial = parseFloat(prompt("digite seu Valor Inicial : " ));
    var numeroRaiz = parseFloat(prompt("Digite seu Valor Final : "));
    var termo = 10;       
    var pa = '';
    
    for( var conta = 1; conta <= termo; conta++){
        pa += conta = +numeroIncial; // problema de nao ir ate o 10
        numeroIncial += numeroRaiz;
    } 
    alert("Resultado:  " +pa);
}