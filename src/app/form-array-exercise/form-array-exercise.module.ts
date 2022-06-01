import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormArrayExerciseComponent} from "./form-array-exercise.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [FormArrayExerciseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FormArrayExerciseComponent
      },
    ]),
    ReactiveFormsModule
  ]
})
export class FormArrayExerciseModule { }
