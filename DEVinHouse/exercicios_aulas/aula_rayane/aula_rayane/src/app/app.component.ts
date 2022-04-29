import { Component, OnInit } from '@angular/core';
import { Calculadora } from 'src/assets/aula4';
const calculadora = new Calculadora();

@Component({
  selector: 'ray-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
    constructor(){}

    ngOnInit(){
      console.log(calculadora.soma(12,12));
    }
  
}
