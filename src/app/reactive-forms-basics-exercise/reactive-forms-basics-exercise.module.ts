import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {ReactiveFormsBasicsExerciseComponent} from "./reactive-forms-basics-exercise.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReactiveFormsBasicsExerciseComponent
      },
    ]),
    ReactiveFormsModule
  ]
})
export class ReactiveFormsBasicsExerciseModule { }
