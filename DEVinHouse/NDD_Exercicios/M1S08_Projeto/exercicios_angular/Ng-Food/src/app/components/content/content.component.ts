import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LISTA_MENU_MOCK } from 'src/app/mocks/menus-mock';
import { IMenu } from 'src/app/modules/menu.model';


@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  listaMenu: IMenu[] = LISTA_MENU_MOCK;
  

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  ouvirCliquedoBotao(titulo: string){
    alert('Cliquei no '+titulo)
  }
  redirecionar(path: string){
    this.route.navigate([path])
  }

}
