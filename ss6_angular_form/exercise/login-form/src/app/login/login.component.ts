import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mess = '';
  loginContent = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get email() {
    return this.loginContent.get('email');
  }

  get password() {
    return this.loginContent.get('password');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.mess = 'Login successfully.';
  }
}
