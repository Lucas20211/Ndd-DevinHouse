import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IComida } from 'src/app/modules/comida.model';

@Component({
  selector: 'ngf-comida-lista',
  templateUrl: './comida-lista.component.html',
  styleUrls: ['./comida-lista.component.scss']
})
export class ComidaListaComponent implements OnInit {

  listaComidas: IComida[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const comidas = this.http.get<IComida[]>('http://localhost:3000/comidas');
    comidas.subscribe((value: IComida[])=>{
    this.listaComidas = value})
  }


}
