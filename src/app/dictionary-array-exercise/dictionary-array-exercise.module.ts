import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DictionaryArrayExerciseComponent} from "./dictionary-array-exercise.component";
import {RouterModule} from "@angular/router";
import {MatLegacyListModule as MatListModule} from "@angular/material/legacy-list";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";



@NgModule({
  declarations: [DictionaryArrayExerciseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DictionaryArrayExerciseComponent
      }
    ]),
    MatListModule,
    MatGridListModule,
    MatCardModule
  ]
})
export class DictionaryArrayExerciseModule { }
