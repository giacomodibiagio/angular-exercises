import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-input',
  template: `
    <input
      class="my-input"
      [placeholder]="label"
      [(ngModel)]="value"
      (input)="onInputChange()"
    />
  `,
  styles: [
    `
      .my-input {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid blue;
        color: #4f4949;
        padding: 10px 5px;
        font-size: 16px;
        width: 100%;
        outline: none;
      }

      .my-input::placeholder {
        color: #716f6f;
        opacity: 0.5;
      }
    `,
  ],
})
export class CustomInputComponent {
  @Input() label: string | undefined;
  @Output() valueChange = new EventEmitter<string>();
  value: string = '';

  onInputChange() {
    this.valueChange.emit(this.value);
  }
}
