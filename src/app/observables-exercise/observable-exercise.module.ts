import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ObservablesExerciseComponent} from "./observables-exercise.component";



@NgModule({
  declarations: [ObservablesExerciseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ObservablesExerciseComponent
      },
    ]),
  ]
})
export class ObservableExerciseModule { }
