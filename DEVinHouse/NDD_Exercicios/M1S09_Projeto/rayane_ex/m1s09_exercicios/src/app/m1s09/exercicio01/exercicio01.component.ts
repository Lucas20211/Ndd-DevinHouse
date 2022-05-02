import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tsc-exercicio01',
  templateUrl: './exercicio01.component.html',
  styleUrls: ['./exercicio01.component.scss']
})
export class Exercicio01Component implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
    const nome:string = 'Lucas';
    let idade:number = 27;
    var cidade:string = 'Lages'; 

    console.log('Olá meu nome é '+nome+' e tenho '+idade+' anos.')
  }

}
