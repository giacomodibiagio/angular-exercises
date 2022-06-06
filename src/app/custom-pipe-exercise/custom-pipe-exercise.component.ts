import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-custom-pipe-exercise',
  template:`

    <form [formGroup]="form" class="form-container">
    <mat-card>
      <!--header-->
      <mat-card-header>
        <mat-card-title>Format memory</mat-card-title>
      </mat-card-header>

      <!--content-->
      <div class="row">
        <div class="col-md-6">
          <mat-form-field class="full-width">
            <input type="number" formControlName="memory" matInput placeholder="memory">
          </mat-form-field>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <mat-radio-group  formControlName="type" class="margin-left">
            <mat-radio-button value="MB"> MB </mat-radio-button>
            <mat-radio-button value="Bytes"> Bytes </mat-radio-button>
          </mat-radio-group>
        </div>
      </div>

    </mat-card>
  </form>

  <hr>
  <!--effetto del custom pipe-->
  MEMORY: {{ this.form.get('memory')?.value | format:  this.form.get('type')?.value  }} <br>
  `,
  styles: [`
    .full-width{
      width: 100%;
    }

    .margin-left mat-radio-button:not(:first-child){
      margin-left:10px;
    }

    .form-container{
      margin: 80px;
    }
  `]
})
export class CustomPipeExerciseComponent {

  constructor(private formBuilder:FormBuilder){}

  value: number | undefined
  unit: 'MB' | 'Bytes' = 'MB'

  form = this.formBuilder.group({
    memory:[''],
    type:[''],
  })

  update(form: FormGroup) {
    this.value = form.get('memory')?.value;
    this.unit = form.get('type')?.value;
  }
}
