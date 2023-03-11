import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
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

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6),
          Validators.pattern('^[a-wA-W0-9]*$')])],
        confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
        country: ['', Validators.compose([Validators.required])],
        age: ['', Validators.compose([Validators.required, Validators.min(19)])],
        gender: ['', Validators.compose([Validators.required])],
        phone: ['', Validators.compose([Validators.required, Validators.pattern('^\\+84[0-9]{9,10}$')])],
        isMarried: '',
      },
      {
        validators: this.checkConfirmPassword,
      });
  }

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


  submit() {
    console.log(this.registerForm.value);
  }


  checkConfirmPassword(fg: FormGroup) {
    return fg.controls?.confirmPassword?.value === fg.controls?.password?.value ? null : {notMatchPassword: 'Not match'};
  }

  readonly validateMatchedControlsValue = (
    firstControlName: string,
    secondControlName: string
  ) => {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const {value: firstControlValue} = formGroup.get(
        firstControlName
      ) as AbstractControl;
      const {value: secondControlValue} = formGroup.get(
        secondControlName
      ) as AbstractControl;
      return firstControlValue === secondControlValue
        ? null
        : {notMatchPassword: 'Not match'};
    };
  }

}
