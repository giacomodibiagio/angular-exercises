import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {MergemapSwitchmapExerciseComponent} from "./mergemap-switchmap-exercise.component";
import {MatCardModule} from "@angular/material/card";



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
        MatCardModule,
    ]
})
export class MergemapSwitchmapExerciseModule { }
