import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CustomPipeExerciseComponent} from "./custom-pipe-exercise.component";
import { FormatPipe } from './format.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatLegacyRadioModule as MatRadioModule} from "@angular/material/legacy-radio";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";



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
