import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Exercicio01Component } from './m1s09/exercicio01/exercicio01.component';
import { Exercicio02Component } from './m1s09/exercicio02/exercicio02.component';
import { Exercicio03Component } from './m1s09/exercicio03/exercicio03.component';
import { Exercicio04Component } from './m1s09/exercicio04/exercicio04.component';
import { Exercicio05Component } from './m1s09/exercicio05/exercicio05.component';
import { Exercicio06Component } from './m1s09/exercicio06/exercicio06.component';
import { Exercicio07Component } from './m1s09/exercicio07/exercicio07.component';
import { Exercicio08Component } from './m1s09/exercicio08/exercicio08.component';
import { Exercicio09Component } from './m1s09/exercicio09/exercicio09.component';
import { Exercicio10Component } from './m1s09/exercicio10/exercicio10.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio01Component,
    Exercicio02Component,
    Exercicio03Component,
    Exercicio04Component,
    Exercicio05Component,
    Exercicio06Component,
    Exercicio07Component,
    Exercicio08Component,
    Exercicio09Component,
    Exercicio10Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
