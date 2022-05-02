import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface IBebidas{
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'ngf-list-bebidas',
  templateUrl: './list-bebidas.component.html',
  styleUrls: ['./list-bebidas.component.scss']
})
export class ListBebidasComponent implements OnInit {

  listadeBebidas: IBebidas[] = []; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<IBebidas[]>('http://localhost:3000/drinks').subscribe((resultado)=>{
      this.listadeBebidas = resultado;
    })
  }
}
