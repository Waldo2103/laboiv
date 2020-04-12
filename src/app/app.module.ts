import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//import { AngularFireModule } from '@angular/fire';//no se si lo use
//import { AngularFireDatabaseModule } from '@angular/fire/database';//no se si lo use
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';

import { CommonModule } from '@angular/common';//Agregados al intentar replicar login de chat aula
import { Routes, RouterModule } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';//Para validar

import { ReactiveFormsModule } from '@angular/forms';
import { PptComponent } from './componentes/ppt/ppt.component';
import { ModalComponent } from './componentes/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PptComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
