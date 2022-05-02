import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface IListas{
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'ngf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {


  listasdeProdutos: IListas[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<IListas[]>('http://localhost:3000/foods').subscribe((resultado)=>{
      this.listasdeProdutos = resultado;
    })
  }
}
