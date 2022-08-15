import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MergemapSwitchmapExerciseComponent} from "./mergemap-switchmap-exercise.component";



@NgModule({
  declarations: [MergemapSwitchmapExerciseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MergemapSwitchmapExerciseComponent
      },
    ]),
  ]
})
export class MergemapSwitchmapExerciseModule { }
