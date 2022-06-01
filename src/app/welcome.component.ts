import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  template: `
    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
      <a mat-tab-link routerLink="/form-array-exercise" routerLinkActive="active-link">form-array-exercise</a>
      <a mat-tab-link routerLink="/reactive-forms-basics-exercise" routerLinkActive="active-link">reactive-forms-basics-exercise</a>
    </nav>
    <mat-tab-nav-panel #tabPanel>
      <router-outlet></router-outlet>
    </mat-tab-nav-panel>
  `,
})
export class WelcomeComponent {}
