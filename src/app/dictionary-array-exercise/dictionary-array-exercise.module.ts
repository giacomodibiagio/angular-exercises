import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DictionaryArrayExerciseComponent} from "./dictionary-array-exercise.component";
import {RouterModule} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";



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
    MatGridListModule
  ]
})
export class DictionaryArrayExerciseModule { }
