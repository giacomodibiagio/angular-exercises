import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-slider-check-exercise',
  template: `
    <mat-card>
      <mat-card-content>
        <input [disabled]="disable" type="range" [ngClass]="{'disabled': disable}" [(ngModel)]="value" [max]="maxValue" [min]="0" class="pullee" />
      </mat-card-content>
    </mat-card>
  `,
  styleUrls: ['./slider-check-exercise.component.scss']
})
export class SliderCheckExerciseComponent implements OnInit {

  @Input() disable:boolean = false
  @Output() onSlideComplete = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.inputRange = document.getElementsByClassName('pullee')[0] as any

    this.inputRange.addEventListener('mousedown', ()=>this.unlockStartHandler(), false);
    this.inputRange.addEventListener('mousestart', ()=>this.unlockStartHandler(), false);
    this.inputRange.addEventListener('mouseup', ()=>this.unlockEndHandler(), false);
    this.inputRange.addEventListener('touchend', ()=>this.unlockEndHandler(), false);
  }
  maxValue: number = 100
  currValue: number = 0
  speed: number = 12
  value: number = 0
  rafID: any
  inputRange: any;





// listen for unlock
  unlockStartHandler() {
    // clear raf if trying again
    window.cancelAnimationFrame(this.rafID);

    // set to desired value
    this.currValue = +this.value;
  }

  unlockEndHandler() {

    // store current value
    this.currValue = +this.value;

    // determine if we have reached success or not
    if(this.currValue >= this.maxValue) {
      this.successHandler();
    }
    else {
      this.rafID = window.requestAnimationFrame(()=>this.animateHandler());
    }
  }

// handle range animation
  animateHandler() {

    // update input range
    this.inputRange.value = this.currValue;

    // determine if we need to continue
    if(this.currValue > -1) {
      window.requestAnimationFrame(()=>this.animateHandler());
    }

    // decrement value
    this.currValue = this.currValue - this.speed;
  }

// handle successful unlock
  successHandler() {
    this.onSlideComplete.emit()
    // reset input range
    this.inputRange.value = 0;

    // alert per esempio
    alert('slider check completato')
  };

}
