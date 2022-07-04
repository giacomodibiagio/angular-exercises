import { Injectable } from '@angular/core';
import {FILM_LIST} from "./DATA";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilmListService {
  getFilmList(){
    return of(FILM_LIST)
  }
}
