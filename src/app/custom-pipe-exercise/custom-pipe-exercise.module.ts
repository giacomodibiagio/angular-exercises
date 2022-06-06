import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CustomPipeExerciseComponent} from "./custom-pipe-exercise.component";
import { FormatPipe } from './format.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [CustomPipeExerciseComponent, FormatPipe],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomPipeExerciseComponent
      }
    ]),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
  ]
})
export class CustomPipeExerciseModule { }
