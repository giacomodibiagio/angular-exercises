import { Component } from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form-array-exercise',
  template: `


    <form [formGroup]="form" class="form-container">
      <mat-card>
        <!--header-->
        <mat-card-header>
          <mat-card-title>Insert user</mat-card-title>
        </mat-card-header>

        <!--content-->
        <ng-container formArrayName="users" *ngFor="let user of users.controls; let i = index; let last = last">
          <div [formGroupName]="i" class="form-group form-inline">
            <div class="row">
              <div class="col-md-5">
                <mat-form-field class="full-width">
                  <input formControlName="firstName" matInput placeholder="First name">
                </mat-form-field>
              </div>
              <div class="col-md-5">
                <mat-form-field class="full-width">
                  <input  formControlName="lastName" matInput placeholder="Last name">
                </mat-form-field>
              </div>
              <div class="col-md-1 icon">
                <mat-icon (click)="addUser()" *ngIf="user?.valid && last">add_circle</mat-icon>
              </div>
              <div class="col-md-1 icon">
                <mat-icon (click)="removeUser(user)" *ngIf="users.controls.length > 1">remove_circle</mat-icon>
              </div>
            </div>
          </div>
        </ng-container>

        <!--buttons-->
        <br>
        <mat-card-actions>
          <button (click)="submit()" [disabled]="form.invalid" mat-raised-button color="primary">Submit</button>
        </mat-card-actions>
      </mat-card>
    </form>

    {{form.value | json}}
  `,
  styles: [`
    .full-width{
      width: 100%;
    }

    .form-container{
      margin: 80px;
    }

    .col-md-1.icon{
      padding-top: 15px;
    }
  `]
})
export class FormArrayExerciseComponent {
  form: FormGroup;
  users: FormArray;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      users: this.fb.array([ ]) as AbstractControl
    });
    this.users = this.form.get('users') as FormArray;
    this.addUser();
  }

  addUser(): void {
    this.users.push(
      this.fb.group({
        firstName: ['',  Validators.required],
        lastName: ['',  Validators.required],
      })
    );
  }

  removeUser(user: AbstractControl): void {
    const index = this.users.controls.indexOf(user);
    this.users.removeAt(index);
  }

  submit() {
    console.log(this.form.value)
  }


}
