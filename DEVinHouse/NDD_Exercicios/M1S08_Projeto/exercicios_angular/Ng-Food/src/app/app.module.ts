import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ComidaListaComponent } from './pages/comida-lista/comida-lista.component';
import { BebidaListaComponent } from './pages/bebida-lista/bebida-lista.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'comidas',
    component: ComidaListaComponent
  },
  {
    path: 'bebidas',
    component: BebidaListaComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
]



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ComidaListaComponent,
    BebidaListaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
