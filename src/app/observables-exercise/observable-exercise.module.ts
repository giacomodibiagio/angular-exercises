import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ObservablesExerciseComponent} from "./observables-exercise.component";
import {MatCardModule} from "@angular/material/card";



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
        MatCardModule,
    ]
})
export class ObservableExerciseModule { }
