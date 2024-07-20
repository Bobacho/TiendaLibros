import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css'
})
export class AuthPageComponent implements OnInit {
  errorSession: boolean = false;
  formLogin: FormGroup = new FormGroup({});
  constructor( private authService: AuthService, private cookie: CookieService, private router:Router) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      nombreUsuario: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      contrasena: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(12)
      ])
    })
  }
  sendLogin(): void {
    const {nombreUsuario, contrasena} = this.formLogin.value
    this.authService.sendCredentials(nombreUsuario,contrasena)
    //Todo 200 < 400
    .subscribe( responseOK => {// usuario con credenciales correstas
      console.log('Sesion iniciada correcta', responseOK);
      const { token, id} = responseOK
      this.cookie.set('token', token, 4,'/') // Aqui se indica q ala variable cookie se le va asignar tokenSession, dura 4 dias y es para toda la app
      this.router.navigate(['/', 'tracks']) // Aqui se le indica la ruta por la que navegara
      

    }, err => { //todo error 400 >=
      this.errorSession= true
      console.log('Ocurrio error en email o password')
    })
  }


}
