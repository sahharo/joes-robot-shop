import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserCredentials } from '../user.model';
import { UserService } from '../user.service';

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

  constructor(private userService: UserService, private router: Router) {}

  signIn() {

    if (!this.credential.email || !this.credential.password) {
      alert('Preencha email e senha 💖');
      return;
    }

    this.userService.signIn(this.credential).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: () => alert('Email ou senha inválidos')
    });
  }
}
