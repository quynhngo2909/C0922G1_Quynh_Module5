import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ICountry} from '../icountry';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  passwordCheck = '';
  countries: ICountry[] = [
    {
      id: 1,
      name: 'Vietnam',
    },
    {
      id: 2,
      name: 'USA',
    },
    {
      id: 3,
      name: 'JP',
    },
  ];
  contactFrom = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    country: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required, Validators.min(19)]),
    gender: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84[0-9]{9,10}$')]),
    isMarried: new FormControl(),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
    }),
  });

  get email() {
    return this.contactFrom.get('email');
  }

  get password() {
    return this.contactFrom.get('password');
  }

  get confirmPassword() {
    return this.contactFrom.get('confirmPassword');
  }

  get country() {
    return this.contactFrom.get('country');
  }

  get age() {
    return this.contactFrom.get('age');
  }

  get gender() {
    return this.contactFrom.get('gender');
  }

  get phone() {
    return this.contactFrom.get('phone');
  }


  get city() {
    return this.contactFrom.get('address').get('city');
  }

  get street() {
    return this.contactFrom.get('address').get('street');
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  submit() {
      console.log(this.contactFrom.value);
  }

  checkPassword(pw: string, cpw: string) {
    if (pw === cpw) {
      this.passwordCheck = 'Password and Confirm Password must be the same.';
      return false;
    } else {
      return true;
    }
  }
}
