import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserCredentials } from '../user.model';

@Component({
  selector: 'bot-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  credential: IUserCredentials = {
    email: '',
    password: '',
  };

  constructor(private router: Router) {}

  signIn() {
  if (!this.credential.email || !this.credential.password) {
    alert('Preencha email e senha, Sasa 💖');
    return;
  }

  console.log('Tentando logar com:', this.credential);
  this.router.navigate(['/catalog']); // agora vai pro catálogo
}
}
