import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  timePoint = 10;
  remainingTime = this.timePoint;
  mess: string;
  interval = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  startTime() {
   this.interval = setInterval(() => {
      this.remainingTime = this.remainingTime - 1;
      if (this.remainingTime === 0) {
        this.clearTime();
        this.mess = 'Time out';
      }
    }, 1000);
  }

  clearTime() {
    clearInterval(this.interval);
  }
  stopTime() {
    this.clearTime();
  }

  resetTime() {
    this.remainingTime = this.timePoint;
  }
}
