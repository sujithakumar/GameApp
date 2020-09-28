import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  jIndex: number = 0;
  kIndex: number = 0;
  scoreCounter: number = 0;
  ineterval: any;

  //inputs--> getting data from parent
  @Input("rowsAndCols") rowsAndCols: number;
  private _startHighLighting = false;

  @Input()
  set startHighLighting(startHighLighting: boolean) {
    this._startHighLighting = startHighLighting;

    if (this._startHighLighting) {
      this.ineterval = setInterval(() => {
        this.startHighlight();
      }, 1000);
    } else {
      clearInterval(this.ineterval);
    }

  }
  get startHighLighting(): boolean {
    return this._startHighLighting;
  }

  //outputs-->sending data to parent
  @Output() receiveMessage = new EventEmitter<number>();

  boxes: number[] = [];

  constructor() { }

  ngOnInit(): void {

    this.setBoxes(this.rowsAndCols);
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes) {
      console.log(changes);
      this.setBoxes(changes.rowsAndCols.currentValue);
    }
  }

  setBoxes(val) {
    this.boxes = [];
    for (var a = 0; a < val; a++) {
      this.boxes.push(a);
    }
  }

  startHighlight() {
    var boxLen = this.boxes.length;
    var table = <HTMLTableElement>document.getElementById("random");
    table.rows[this.jIndex].cells[this.kIndex].style.backgroundColor = "#aaa";
    var j = Math.floor(Math.random() * boxLen);// between 0 and boxLen
    var k = Math.floor(Math.random() * boxLen);
    while (j <= boxLen && k <= boxLen) {
      table.rows[j].cells[k].style.backgroundColor = "springGreen";
      this.jIndex = j;
      this.kIndex = k;
      return;
    }

  }

  setScores(i, j) {

    if (this.jIndex === i && this.kIndex === j) {
      this.scoreCounter = this.scoreCounter + 1;
    } else {
      this.scoreCounter = this.scoreCounter - 1;
    }
    this.receiveMessage.emit(this.scoreCounter);
  }

}
