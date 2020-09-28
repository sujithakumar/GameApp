import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  timer: number = 60;
  ScoreCounter: number = 0;;
  HighScore: number = parseInt(localStorage.getItem("highScore")) || 0;
  timeUp: boolean = false;
  rowsAndCols: number = 3;
  startHighLighting: boolean = false;
  intervalTime: number;
  //behaviour subject
  resetRequest = this.AppServiceService.msg
    .subscribe(value => {
      this.resetValues();
    });

  interval: any;

  constructor(private AppServiceService: AppServiceService) { }

  ngOnInit(): void {

  }

  slectLevel(input): void {
    this.rowsAndCols = input;
  }

  startTheGame() {
    this.intervalTime = 1000;
    setInterval(() => {
      if (this.timer > 0) {
        this.timer = this.timer - 1;
        this.startHighLighting = true;
        this.setFinalValues();
      }

      else {
        this.timeUp = true;
        this.startHighLighting = false;
      }
    }, this.intervalTime);

    this.resetValues();
  }

  setFinalValues() {

    if (this.HighScore <= this.ScoreCounter) {
      localStorage.setItem("highScore", (this.ScoreCounter).toString());
      this.HighScore = this.ScoreCounter;
    }
  }

  receiveMessage(msg) {
    this.ScoreCounter = msg;
  }

  resetValues() {
    clearInterval();
    this.intervalTime = 0;
    this.ScoreCounter = 0;
    this.startHighLighting = false;
    this.timeUp = false;
  }
}
