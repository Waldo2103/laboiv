import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { ErrorComponent } from './componentes/error/error.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'', component: BienvenidaComponent},
  //{path:'error', component: ErrorComponent},
  {path:'**', component: ErrorComponent}//si se ingresa cualquier cosa toma este SIEMPRE TIENE QUE IR AL FINAL, SINO NO TOMA LOS DE ABAJO
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
