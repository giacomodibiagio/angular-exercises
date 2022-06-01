import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template:`
    <mat-toolbar color="primary">
      <span>Angular exercises</span>
    </mat-toolbar>
    <br>
  `,
})
export class HeaderComponent {

  constructor() { }
}
