import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CustomDirectiveExerciseComponent} from "./custom-directive-exercise.component";
import { ColorChangeDirective } from './color-change.directive';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    CustomDirectiveExerciseComponent,
    ColorChangeDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomDirectiveExerciseComponent
      }
    ]),
    MatCardModule,
    MatButtonModule,
  ]
})
export class CustomDirectiveExerciseModule { }
