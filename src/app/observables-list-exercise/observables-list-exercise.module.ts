import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObservablesListExerciseComponent} from "./observables-list-exercise.component";
import { FilmListComponent } from './film-list-component/film-list.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [ObservablesListExerciseComponent, FilmListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ObservablesListExerciseComponent
      },
    ]),
  ]
})
export class ObservablesListExerciseModule { }
