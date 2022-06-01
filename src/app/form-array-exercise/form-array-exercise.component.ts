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
        <ng-container formArrayName="items" *ngFor="let item of items.controls; let i = index; let last = last">
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
                <mat-icon (click)="addUser()" *ngIf="item?.valid && last">add_circle</mat-icon>
              </div>
              <div class="col-md-1 icon">
                <mat-icon (click)="removeUser(item)" *ngIf="items.controls.length > 1">remove_circle</mat-icon>
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
  items: FormArray;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([ ]) as AbstractControl
    });
    this.items = this.form.get('items') as FormArray;
    this.addUser();
  }

  addUser(): void {
    this.items.push(
      this.fb.group({
        firstName: ['',  Validators.required],
        lastName: ['',  Validators.required],
      })
    );
  }

  removeUser(item: AbstractControl): void {
    const index = this.items.controls.indexOf(item);
    this.items.removeAt(index);
  }

  submit() {
    alert('Users: ' + JSON.stringify(this.form.value.items));
  }


}
