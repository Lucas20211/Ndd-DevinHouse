import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListasComponent } from './pages/listas/listas.component';
import { ListBebidasComponent } from './component/list-bebidas/list-bebidas.component';


const routes: Routes = [
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'comidas',
    component: ListasComponent
  },
  {
    path: 'bebidas',
    component: ListBebidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
