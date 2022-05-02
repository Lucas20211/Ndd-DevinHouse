
import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'ngf-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  pesquisa = document.getElementById('pesquisa')?.textContent;

  constructor() { }

  ngOnInit(): void {
    console.log(this.pesquisa)
  }

}
