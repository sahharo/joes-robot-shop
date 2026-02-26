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
  signInError: boolean = false;

  constructor(private userService: UserService, private router: Router) {}

  signIn() {
    this.signInError = false;
    this.credential.email = this.credential.email.trim().toLowerCase();

    this.userService.signIn(this.credential).subscribe({
      next: () => this.router.navigate(['/catalog']),
      error: (err) => {
        console.log('Erro do login:', err);
        this.signInError = true;
      }
    });
  }
}
