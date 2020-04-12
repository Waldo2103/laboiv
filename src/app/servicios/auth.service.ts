import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public AFauth: AngularFireAuth) { }

  login(email: string, pass: string){
    return new Promise((resolve,reject) => {
      this.AFauth.signInWithEmailAndPassword(email,pass)
      .then( userData => resolve(userData),
      err => reject (err));
    })
  }
  /*login(email: string, password: string){
    return new Promise((resolve, rejected) =>{
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user)
      }).catch(err => rejected(err))
    })
    
  }*/
}
