import { Component } from '@angular/core';

@Component({
  selector: 'app-shared-component-exercise',
  template: `
    <div class="layout">
      <app-custom-button
        [label]="buttonLabel"
        (clickEvent)="onButtonClick()"
      ></app-custom-button>
      <app-custom-input
        label="Enter your text"
        (valueChange)="onInputValueChange($event)"
      ></app-custom-input>
    </div>
  `,
  styles: [
    `
      .layout {
        display: flex;
        flex-direction: column;
        align-content: center;
        align-items: center;
        gap: 20px;
      }
    `,
  ],
})
export class SharedComponentExerciseComponent {
  buttonLabel = 'Click me';

  /**
   * Handles button click event
   */
  onButtonClick(): void {
    // Prints 'clicked' to the console
    console.log('clicked');
  }

  onInputValueChange(value: string) {
    console.log('Updated value:', value);
    // Perform any other logic with the updated value
  }
}
