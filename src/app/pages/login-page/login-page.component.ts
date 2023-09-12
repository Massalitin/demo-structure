import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor(private router: Router) {}
  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit() {
    this.router.navigate(['/']);
  }
}
