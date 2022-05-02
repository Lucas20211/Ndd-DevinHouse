import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tsc-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.scss']
})
export class Exercicio02Component implements OnInit {

        constructor() { }

        ngOnInit(): void {
            function soma(valor1:number, valor2:number){
              return valor1 + valor2;
          }        
          console.log('Exercicio 02:  '+soma(5, 10));
      }
}
