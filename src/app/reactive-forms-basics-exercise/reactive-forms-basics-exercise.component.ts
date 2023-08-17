import { Component } from '@angular/core';
import {UntypedFormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactive-forms-basics-exercise',
  template: `
    <form [formGroup]="form" class="form-container">
      <mat-card>
        <!--header-->
        <mat-card-header>
          <mat-card-title>Insert your profile informations</mat-card-title>
        </mat-card-header>

        <!--content-->
        <div class="row">
          <div class="col-md-6">
            <mat-form-field class="full-width">
              <input formControlName="firstName" matInput placeholder="First name">
            </mat-form-field>
          </div>
          <div class="col-md-6">
            <mat-form-field class="full-width">
              <input  formControlName="lastName" matInput placeholder="Last name">
            </mat-form-field>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <mat-form-field class="full-width">
              <input formControlName="address" matInput placeholder="Address">
            </mat-form-field>
          </div>
          <div class="col-md-6">
            <mat-form-field class="full-width">
              <input type="email" formControlName="email" matInput placeholder="Email">
              <mat-error>
                Email is <strong>required</strong>
              </mat-error>
            </mat-form-field>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <mat-radio-group  formControlName="gender" class="margin-left">
              <mat-radio-button value="male"> Male </mat-radio-button>
              <mat-radio-button value="female"> Female </mat-radio-button>
            </mat-radio-group>
          </div>
        </div>

        <!--buttons-->
        <br>
        <mat-card-actions>
          <button (click)="saveForm()" mat-raised-button color="primary">Save</button>
        </mat-card-actions>
      </mat-card>
    </form>

    {{form.value | json}}
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
export class ReactiveFormsBasicsExerciseComponent {

  constructor(private formBuilder:UntypedFormBuilder){}

  form = this.formBuilder.group({
    firstName:[''],
    lastName:[''],
    address:[''],
    email:['', Validators.required],
    gender:['']
  });

  saveForm(){
    console.log('form ', this.form.value);
  }

}


