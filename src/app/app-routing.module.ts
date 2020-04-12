import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { PptComponent } from './componentes/ppt/ppt.component';
//import { HeaderComponent } from './shared/components/header/header.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'ppt', component: PptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
