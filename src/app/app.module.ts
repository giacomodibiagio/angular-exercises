import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found.component';
import { TabNavComponent } from './tab-nav.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ReactiveFormsBasicsExerciseComponent } from './reactive-forms-basics-exercise/reactive-forms-basics-exercise.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { HeaderComponent } from './header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { DictionaryArrayExerciseComponent } from './dictionary-array-exercise/dictionary-array-exercise.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TabNavComponent,
    ReactiveFormsBasicsExerciseComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'reactive-forms-basics-exercise',
        loadChildren: () => import('./reactive-forms-basics-exercise/reactive-forms-basics-exercise.module').then(m => m.ReactiveFormsBasicsExerciseModule)
      },
      {
        path: 'form-array-exercise',
        loadChildren: () => import('./form-array-exercise/form-array-exercise.module').then(m => m.FormArrayExerciseModule)
      },
      {
        path: 'dictionary-array-exercise',
        loadChildren: () => import('./dictionary-array-exercise/dictionary-array-exercise.module').then(m => m.DictionaryArrayExerciseModule)
      },
      {path: '', redirectTo: 'reactive-forms-basics-exercise', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
