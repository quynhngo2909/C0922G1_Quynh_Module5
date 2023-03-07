import {Component, Input, OnInit} from '@angular/core';
import {IRatingUnit} from '../irating-unit';

@Component({
  selector: 'app-rating-bar-component',
  templateUrl: './rating-bar-component.component.html',
  styleUrls: ['./rating-bar-component.component.css']
})
export class RatingBarComponentComponent implements OnInit {
  @Input() backgroundColor = '#9e9e9e';
  @Input() selectedColor = '#ff1493';
  @Input() rateBar: IRatingUnit[] = [
    {
      value: 1,
      active : this.backgroundColor,
    },
    {
      value: 2,
      active: this.backgroundColor,
    },
    {
      value: 3,
      active: this.backgroundColor,
    },
    {
      value: 4,
      active: this.backgroundColor,
    },
    {
      value: 5,
      active: this.backgroundColor,
    },
    {
      value: 6,
      active: this.backgroundColor,
    },
    {
      value: 7,
      active: this.backgroundColor,
    },
    {
      value: 8,
      active: this.backgroundColor,
    },
    {
      value: 9,
      active: this.backgroundColor,
    },
    {
      value: 10,
      active: this.backgroundColor,
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  selectRate(rate: number) {
    for (let i = 0; i < rate; i++) {
      this.rateBar[i].active = this.selectedColor;
    }
    for (let i = rate;  i < this.rateBar.length; i++) {
      this.rateBar[i].active = this.backgroundColor;
    }
  }
}
