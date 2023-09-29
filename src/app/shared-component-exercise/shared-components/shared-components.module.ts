import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomButtonComponent} from "./custom-button/custom-button.component";
import { CustomInputComponent } from './custom-input/custom-input.component';
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        CustomButtonComponent,
        CustomInputComponent
    ],
    exports: [
        CustomButtonComponent,
        CustomInputComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class SharedComponentsModule { }
