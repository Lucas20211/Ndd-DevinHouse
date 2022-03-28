var resultado = 0;
    var operador = prompt("Deseja qual operação? (+, -, *, ou /) ");
    var number1 = 2;
    var number2 = 4;

    
        switch(operador){
            case '+':
                resultado = number1 + number2;
            console.log("O resultado é = " +resultado+ " 🤜🤛");
                break;
            case '-':
                if(number2 >number1){
                    resultado = number2 - number1;
                console.log("O resultado é = " +resultado+ "  🤜🤛");
                }else  
                    resultado = number1 - number2;
                console.log("O resultado é = " +resultado+ "  🤜🤛");
                    break;
            case '*':
                resultado = number1 * number2;
            console.log("O resultado é = " +resultado+ "  🤜🤛");
                break;
            case '/':
                resultado = number1 / number3;
            console.log("O resultado é = " +resultado+ "  🤜🤛");
                break;
            default:
            console.log("❌❌  Digite a operação ou número correto! ❌❌");
        }
        console.log(resultado);
