import { Component, OnInit } from '@angular/core';
import {FilmListService} from "./film-list.service";

@Component({
  selector: 'app-observables-list-exercise',
  template: `
    <h4>Watch List</h4>

    <div>

      <app-film-list
        *ngFor="let item of watchList | slice:0:maxItemsShown; index as i; first as f; last as l"
        [item]="item"
        [first]="f"
        [last]="l"
        (up)="moveItemUp(i)"
        (down)="moveItemDown(i)"
      ></app-film-list>

      <button
        (click)="showAll()"
        *ngIf="maxItemsShown < watchList.length"
        class="btn btn-info">Show All...</button>

    </div>
  `,
  styles: [``]
})
export class ObservablesListExerciseComponent implements OnInit {
  watchList: any = [];
  maxItemsShown = 4;


  constructor(private filmListService: FilmListService) {}

  ngOnInit() {
    this.filmListService.getFilmList().subscribe(res => this.watchList = res)
  }

  moveItemUp(idx: number) {
    let cur = this.watchList[idx];
    let swap = this.watchList[idx-1];
    this.watchList[idx] = swap
    this.watchList[idx-1] = cur
  }

  moveItemDown(idx: number) {
    let cur = this.watchList[idx];
    let swap = this.watchList[idx+1];
    this.watchList[idx] = swap
    this.watchList[idx+1] = cur
  }

  showAll() {
    this.maxItemsShown = this.watchList.length;
  }

}
