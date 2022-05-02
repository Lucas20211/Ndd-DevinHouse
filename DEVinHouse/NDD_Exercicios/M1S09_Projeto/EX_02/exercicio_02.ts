// Crie um arquivo typescript com o nome exercicio02.ts, em uma função, do tipo arrow function, some dois números inteiros e adicione 
// o seu retorno a uma variável local chamada sum e imprima no console.log o resultado. 
// Os valores a serem somados devem ser passados como parâmetros da função e você que irá escolher os valores, 
// não esqueça de declarar o tipo do retorno e o tipo dos parâmetros.

let valor1:number;
let valor2: number;

function soma(valor1:number, valor2:number){
    return valor1 + valor2;
}

console.log('Exercicio 02:  '+soma(5, 10));