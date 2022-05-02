import {NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { FooterComponent } from './component/footer/footer.component';
import { ListComponent } from './component/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { ListasComponent } from './pages/listas/listas.component';
import { ListBebidasComponent } from './component/list-bebidas/list-bebidas.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ListComponent,
    HomeComponent,
    ListasComponent,
    ListBebidasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
