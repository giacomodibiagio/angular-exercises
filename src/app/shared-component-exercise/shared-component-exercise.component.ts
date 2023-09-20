import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-component-exercise',
  template: `
      <div class="layout">
          <app-custom-button [label]="buttonLabel" (clickEvent)="onButtonClick()"></app-custom-button>
      </div>
  `,
  styles: [`
      .layout {
          display: flex;
          justify-content: center;
      }
  `]
})
export class SharedComponentExerciseComponent {
    buttonLabel = 'Click me';

    onButtonClick() {
        console.log('clicked')
    }
}
