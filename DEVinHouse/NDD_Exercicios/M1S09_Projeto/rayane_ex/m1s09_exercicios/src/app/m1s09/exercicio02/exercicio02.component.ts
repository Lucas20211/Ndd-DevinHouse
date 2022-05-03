import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tsc-exercicio02',
  templateUrl: './exercicio02.component.html',
  styleUrls: ['./exercicio02.component.scss']
})
export class Exercicio02Component implements OnInit {

        constructor() { }

        ngOnInit(): void {
          let objeto:{val1:number, val2:number} ={
            val1:10,
            val2:10
        }
        
        function soma(objeto:any): number{
            return objeto.val1 + objeto.val2;
        }
        console.log(soma(objeto));
        
      }
}
