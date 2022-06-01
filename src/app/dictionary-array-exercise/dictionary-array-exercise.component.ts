import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";
import {Response, User} from "./models";

@Component({
  selector: 'app-dictionary-array-exercise',
  template:`

    <div class="row">
      <div class="col">
        <mat-grid-list cols="1" rowHeight="15:1" >
          <mat-grid-tile>
            <u>Breeds</u>
          </mat-grid-tile>
          <mat-grid-tile *ngFor="let breed of breedDictionary$ | async">
            {{breed}}
          </mat-grid-tile>
        </mat-grid-list>
      </div>

      <div class="col">
        <mat-grid-list cols="2" rowHeight="7:1" >
          <mat-grid-tile>
            <u>User id</u>
          </mat-grid-tile>
          <mat-grid-tile>
            <u>User name</u>
          </mat-grid-tile>
          <ng-container *ngFor="let user of usersList$ | async">
            <mat-grid-tile>
              {{user.id}}
            </mat-grid-tile>
            <mat-grid-tile>
              {{user.name}}
            </mat-grid-tile>
          </ng-container>
        </mat-grid-list>
      </div>
    </div>

  `,
  styles: [``]
})
export class DictionaryArrayExerciseComponent {
  usersListUrl: string = `https://jsonplaceholder.typicode.com/users`;
  BreedsListUrl: string = `https://dog.ceo/api/breeds/list/all`;

  breedDictionary$ = this.http.get<Response>(this.BreedsListUrl)
    .pipe(
      map(res=>res.message),
      map(res=>Object.keys(res)),
      map(res=>res.filter(item=>item.length>10))
    )

  usersList$ = this.http.get<User[]>(this.usersListUrl)
    .pipe(
      map(res=>res.filter(user=>user.name.length>10))
    )

  constructor(private http: HttpClient){}



}
