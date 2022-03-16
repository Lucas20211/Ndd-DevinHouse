// CALCULADORA COM ESCOLHA DE FUNCAO 

function cliqueAqui(){

var resultado = 0;
var operador = prompt("Deseja qual operação? (+, -, *, ou /) ");
var number1 = parseFloat(prompt("Informe o primeiro valor: " ));
var number2 = parseFloat(prompt("Informe o segundo valor: " ));

    switch(operador){
        case '+':
            resultado = number1 + number2;
            alert("O resultado é = " +resultado+ " 🤜🤛");
            break;
        case '-':
            if(number2 >number1){
                resultado = number2 - number1;
                alert("O resultado é = " +resultado+ "  🤜🤛");
            }else  
                resultado = number1 - number2;
                alert("O resultado é = " +resultado+ "  🤜🤛");
                break;
        case '*':
            resultado = number1 * number2;
            alert("O resultado é = " +resultado+ "  🤜🤛");
            break;
        case '/':
            resultado = number1 / number2;
            alert("O resultado é = " +resultado+ "  🤜🤛");
            break;
        default:
            alert("❌❌  Digite a operação ou número correto! ❌❌");
    }
}