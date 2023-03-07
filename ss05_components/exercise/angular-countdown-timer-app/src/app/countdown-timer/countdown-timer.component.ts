import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {
  timePoint = 10;
  time = this.timePoint;
  mess: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  startTime() {
    let interval = setInterval(() => {
      this.time = this.time - 1;
      if (this.time === 0) {
        clearInterval(interval);
        this.mess = 'Time out';
      }
    }, 1000);
  }

  stopTime() {
  }

  resetTime() {
    this.time = this.timePoint;
  }
}
