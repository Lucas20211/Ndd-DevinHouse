import { Calculadora } from './aula4'
let calculadora = new Calculadora();


class Calculos{
    numero1:number;
    numero2:number;

    constructor(numero1:number, numero2:number){
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

}

let calculos = new Calculos(5, 5);

let soma = calculadora.soma(calculos.numero1, calculos.numero2);
console.log(soma);