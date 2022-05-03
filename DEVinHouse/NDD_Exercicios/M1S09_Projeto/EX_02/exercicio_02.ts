// Crie um arquivo typescript com o nome exercicio02.ts, em uma função, do tipo arrow function, some dois números inteiros e adicione 
// o seu retorno a uma variável local chamada sum e imprima no console.log o resultado. 
// Os valores a serem somados devem ser passados como parâmetros da função e você que irá escolher os valores, 
// não esqueça de declarar o tipo do retorno e o tipo dos parâmetros.

let objeto:{val1:number, val2:number} ={
    val1:10,
    val2:10
}

function soma(objeto:any): number{
    return objeto.val1 + objeto.val2;
}
console.log(soma(objeto));
