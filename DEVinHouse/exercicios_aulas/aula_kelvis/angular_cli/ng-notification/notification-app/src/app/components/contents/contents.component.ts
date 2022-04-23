import { Component, OnInit } from '@angular/core';
import { INotificacao } from 'src/app/models/notificacao.model';
import { NOTIFICATIONS_MOCK } from 'src/app/utils/notifications-mock';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ntf-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  listaDeNotificacoes: INotificacao[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<INotificacao[]>('/models/notificacao.model')
      .subscribe((resultado) => {
        this.listaDeNotificacoes = resultado;
      });
  }
  chamarClique() {
    alert('Item clicado');
  }
}
