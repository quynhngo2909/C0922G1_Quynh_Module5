import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ICountry} from '../icountry';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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

  registerForm: FormGroup;

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }


  get city() {
    return this.registerForm.get('address').get('city');
  }

  get street() {
    return this.registerForm.get('address').get('street');
  }

  constructor() {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6),
        this.checkConfirmPassword.bind(this)]),
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
  }

  submit() {
    console.log(this.registerForm.value);
  }

  checkConfirmPassword(fg: AbstractControl) {
    if (this.registerForm) {
      return fg.value === this.registerForm.controls.password.value ? null : {notMatchPassword: 'Not match'};
    }
  }
}
