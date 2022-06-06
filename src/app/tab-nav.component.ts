import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-nav',
  template: `
    <nav mat-tab-nav-bar [tabPanel]="tabPanel">
      <a mat-tab-link routerLink="/reactive-forms-basics-exercise" routerLinkActive="active-link">reactive-forms-basics-exercise</a>
      <a mat-tab-link routerLink="/form-array-exercise" routerLinkActive="active-link">form-array-exercise</a>
      <a mat-tab-link routerLink="/dictionary-array-exercise" routerLinkActive="active-link">dictionary-array-exercise</a>
      <a mat-tab-link routerLink="/custom-pipe-exercise" routerLinkActive="active-link">custom-pipe-exercise</a>
      <a mat-tab-link routerLink="/custom-directive-exercise" routerLinkActive="active-link">custom-directive-exercise</a>
    </nav>
    <mat-tab-nav-panel #tabPanel>
      <div class="container mt-5">
        <router-outlet></router-outlet>
      </div>
    </mat-tab-nav-panel>
  `,
})
export class TabNavComponent {}
