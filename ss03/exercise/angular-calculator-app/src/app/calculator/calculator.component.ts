import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public num1: number;
  public num2: number;
  public num3: number;
  public mess: string;
  constructor() { }

  ngOnInit(): void {
  }

  add(): number {
    return this.num3 = this.num1 + this.num2;
  }

  sub(): number {
    return  this.num3 = this.num1 - this.num2;
  }
  multiply(): number {
    return this.num3 = this.num1 * this.num2;
  }
  divide() {
    if (this.num2 === 0) {
      return this.mess = 'Can not divide by 0!';
    } else {
      return this.num3 = this.num1 / this.num2;
    }
  }

}
