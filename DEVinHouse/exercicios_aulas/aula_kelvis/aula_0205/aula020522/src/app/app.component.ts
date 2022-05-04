import { Component } from '@angular/core';

interface IAluno{
  nome: string;
  idade: number;
  nota: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  
  aluno = {
    nome: 'Lucas Martins',
    idade: 27,
    nota: 9
  }
}
