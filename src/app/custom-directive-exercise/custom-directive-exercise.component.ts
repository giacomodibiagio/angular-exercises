import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directive-exercise',
  template: `
    <mat-card>
      <div>
        <h1 [appColorChange]=newColor>Custom color change directive</h1>
      </div>
      <br>
      <mat-card-actions>
        <button (click)="changeColor()" mat-raised-button color="primary">Change color</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: ['']
})
export class CustomDirectiveExerciseComponent {
  newColor = 'blue';
  colors = ['blue', 'red', 'white'];

  changeColor() {
    this.newColor = this.colors[this.colors.findIndex(color=>color===this.newColor) + 1];
    if (this.newColor==undefined){
      this.newColor='blue';
    }
  }
}
