import { Component, OnInit } from '@angular/core';

let aluno:{
  nome: string,
  matricula: number,
  ativo: boolean,
  cadeiras: string[] 
}

@Component({
  selector: 'tsc-exercicio03',
  templateUrl: './exercicio03.component.html',
  styleUrls: ['./exercicio03.component.scss']
})
export class Exercicio03Component implements OnInit {
  
  // cadastro: aluno;
  // nome: string;
  // matricula: number;
  // ativo: boolean;
  // cadeiras: string[];
  
  

  // constructor(nome: string, matricula: number, ativo: boolean,cadeiras: string[]) {
  //   this.nome = nome,
  //   this.matricula = matricula,
  //   this.ativo = ativo,
  //   this.cadeiras = cadeiras
  //  }
  
  ngOnInit(): void {
  }

};
