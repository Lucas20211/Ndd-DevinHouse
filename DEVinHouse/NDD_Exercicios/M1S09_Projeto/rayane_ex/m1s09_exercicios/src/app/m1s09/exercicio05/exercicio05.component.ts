import { Component, OnInit } from '@angular/core';

class Animal{
  nome: string = '';
  raca: string = '';
  corPelagem: string = '';
  peso: number = 0;
}


@Component({
  selector: 'tsc-exercicio05',
  templateUrl: './exercicio05.component.html',
  styleUrls: ['./exercicio05.component.scss']
})
export class Exercicio05Component implements OnInit {

  constructor(nome: string, raca: string, cor: string, peso: number) { 
        // this.nome = nome;
        // this.raca = raca;
        // this.corPelagem = cor;
        // this.peso = peso; 
  }

  ngOnInit(): void {
  }

}
