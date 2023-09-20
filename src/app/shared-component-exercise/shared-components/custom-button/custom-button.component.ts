import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  template: `
    <button class="my-button" (click)="onClick()">
      {{ label }}
    </button>
  `,
  styles: [`
    .my-button {
      background-color: blue;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }
  `]
})
export class CustomButtonComponent {
  @Input() label: string | undefined;
  @Output() clickEvent = new EventEmitter();

  onClick() {
    this.clickEvent.emit();
  }
}
