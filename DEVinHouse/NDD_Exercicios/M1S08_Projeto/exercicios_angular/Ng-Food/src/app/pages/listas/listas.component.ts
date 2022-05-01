import { Component, OnInit } from '@angular/core';


interface IListas{
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'ngf-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss']
})
export class ListasComponent implements OnInit {

  listasdeProdutos: IListas[] = [
    {
      id: 1,
      name: "Ao molho",
      description: "Macarrão ao molho branco, fughi e cheiro verde das montanhas.",
      price: 19.9,
      image: "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png"
    },
    {
      id: 2,
      name: "Veggie",
      description: "Macarrão com pimentão, ervilha e ervas finas colhidas no himalaia.",
      price: 21.9,
      image: "https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food2.png"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
