import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

import { AngularFireDatabase } from "@angular/fire/database";


export class Message {
  
  content: string;
  style: string;
  dissmissed: boolean = false;

  constructor(content, style?){
    this.content = content
    this.style = style || 'info'
  }
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private db: AngularFireAuth) {
    //getMessages(): AngularFireDatabase
   }
}
