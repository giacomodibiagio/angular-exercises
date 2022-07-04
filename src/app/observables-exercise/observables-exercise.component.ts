import { Component, OnInit } from '@angular/core';
import {oFavFilms, oUser} from "./observables";
import {map} from "rxjs";

@Component({
  selector: 'app-observables-exercise',
  template: `
    <div>hello {{userName | async}}</div>

    <div *ngFor="let film of favFilms | async">{{film.title}}</div>
  `,
  styles: [``]
})
export class ObservablesExerciseComponent {
  userName = oUser.pipe(map(res=>res.name))
  favFilms = oFavFilms
}
