import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-film-list',
  template: `
    <div>
      <div>
        <div>{{item.title}}</div>
        <div>{{item.price | currency}} {{ item.dateAdded | date}}</div>
      </div>
      <div>
        <i (click)="moveUp()"
           *ngIf="!first"
           class="material-icons">expand_less</i>
        <i  (click)="moveDown()"
            *ngIf="!last"
            class="material-icons">expand_more</i>
      </div>
    </div>
  `,
  styles: [``]
})
export class FilmListComponent {
  @Input() item: any;
  @Input() first: any;
  @Input() last: any;
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();

  moveUp() {
    this.up.emit();
  }

  moveDown() {
    this.down.emit();
  }
}
