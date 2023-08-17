import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import { PageNotFoundComponent } from './page-not-found.component';
import { TabNavComponent } from './tab-nav.component';
import {MatLegacyTabsModule as MatTabsModule} from "@angular/material/legacy-tabs";
import { ReactiveFormsBasicsExerciseComponent } from './reactive-forms-basics-exercise/reactive-forms-basics-exercise.component';
import {MatLegacyCardModule as MatCardModule} from "@angular/material/legacy-card";
import {MatLegacyFormFieldModule as MatFormFieldModule} from "@angular/material/legacy-form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatLegacyRadioModule as MatRadioModule} from "@angular/material/legacy-radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatLegacyInputModule as MatInputModule} from "@angular/material/legacy-input";
import {MatLegacyButtonModule as MatButtonModule} from "@angular/material/legacy-button";
import { HeaderComponent } from './header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HttpClientModule} from "@angular/common/http";
import { SliderCheckExerciseComponent } from './slider-check-exercise/slider-check-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    TabNavComponent,
    ReactiveFormsBasicsExerciseComponent,
    HeaderComponent,
    SliderCheckExerciseComponent,
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
      {
        path: 'custom-pipe-exercise',
        loadChildren: () => import('./custom-pipe-exercise/custom-pipe-exercise.module').then(m => m.CustomPipeExerciseModule)
      },
      {
        path: 'custom-directive-exercise',
        loadChildren: () => import('./custom-directive-exercise/custom-directive-exercise.module').then(m => m.CustomDirectiveExerciseModule)
      },
      {
        path: 'observables-exercise',
        loadChildren: () => import('./observables-exercise/observable-exercise.module').then(m => m.ObservableExerciseModule)
      },
      {
        path: 'observables-list-exercise',
        loadChildren: () => import('./observables-list-exercise/observables-list-exercise.module').then(m => m.ObservablesListExerciseModule)
      },
      {
        path: 'slider-check-exercise',
        loadChildren: () => import('./slider-check-exercise/slider-check-exercise.module').then(m => m.SliderCheckExerciseModule)
      },
      {
        path: 'mergemap-switchmap-exercise',
        loadChildren: () => import('./mergemap-switchmap-exercise/mergemap-switchmap-exercise.module').then(m => m.MergemapSwitchmapExerciseModule)
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
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
