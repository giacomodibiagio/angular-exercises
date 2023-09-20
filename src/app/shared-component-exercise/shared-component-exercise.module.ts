import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SharedComponentExerciseComponent} from "./shared-component-exercise.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SharedComponentExerciseComponent
      },
    ]),
  ]
})
export class SharedComponentExerciseModule { }
