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
      <a mat-tab-link routerLink="/observables-exercise" routerLinkActive="active-link">observables-exercise</a>
      <a mat-tab-link routerLink="/observables-list-exercise" routerLinkActive="active-link">observables-list-exercise</a>
      <a mat-tab-link routerLink="/slider-check-exercise" routerLinkActive="active-link">slider-check-exercise</a>
      <a mat-tab-link routerLink="/mergemap-switchmap-exercise" routerLinkActive="active-link">mergemap-switchmap-exercise</a>
      <a mat-tab-link routerLink="/shared-component-exercise" routerLinkActive="active-link">shared-component-exercise</a>
    </nav>
    <mat-tab-nav-panel #tabPanel>
      <div class="container mt-5">
        <router-outlet></router-outlet>
      </div>
    </mat-tab-nav-panel>
  `,
})
export class TabNavComponent {}
