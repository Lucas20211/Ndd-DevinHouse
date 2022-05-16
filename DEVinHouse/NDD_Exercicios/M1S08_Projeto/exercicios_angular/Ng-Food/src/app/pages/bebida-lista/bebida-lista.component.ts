import { Component, OnInit } from '@angular/core';
import { LISTA_BEBIDAS_MOCK } from 'src/app/mocks/bebidas-mock';
import { IBebida } from 'src/app/modules/bebida.model';

@Component({
  selector: 'ngf-bebida-lista',
  templateUrl: './bebida-lista.component.html',
  styleUrls: ['./bebida-lista.component.scss']
})
export class BebidaListaComponent implements OnInit {

  listaBebida: IBebida[] = LISTA_BEBIDAS_MOCK;

  constructor() { }

  ngOnInit(): void {
  }

}
