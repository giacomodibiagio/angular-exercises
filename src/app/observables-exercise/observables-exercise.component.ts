import { Component, OnInit } from '@angular/core';
import {oFavFilms, oUser} from "./observables";
import {map} from "rxjs";

@Component({
  selector: 'app-observables-exercise',
  template: `
    <mat-card>
      <mat-card-content>
        <div>hello {{userName | async}}</div>

        <div *ngFor="let film of favFilms | async">{{film.title}}</div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [``]
})
export class ObservablesExerciseComponent {
  userName = oUser.pipe(map(res=>res.name))
  favFilms = oFavFilms
}
