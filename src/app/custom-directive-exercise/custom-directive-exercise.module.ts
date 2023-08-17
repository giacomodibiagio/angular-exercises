import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CustomDirectiveExerciseComponent} from "./custom-directive-exercise.component";
import { ColorChangeDirective } from './color-change.directive';
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";



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
