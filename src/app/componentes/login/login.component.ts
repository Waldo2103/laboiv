import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = new Usuario();
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  Ingresar(){
    console.log(this.usuario);
    if (this.usuario.email == 'admin@mail.com' && this.usuario.pass == 'admin') {
      this.route.navigate(['home']); //a home
    } else {
      this.route.navigate(['**']); //a Error
    }
  }

}
