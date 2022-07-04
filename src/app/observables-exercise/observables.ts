import {of} from "rxjs";

export let oName = of('Nome a caso')
export let oFavFilms = of([
  {
    "title": "Titolo 1"
  },
  {
    "title": "Titolo 2"
  },
  {
    "title": "Titolo3"
  }])

export let oUser = of(
  {"name":"Pippo Pippo","favFilm":"Titolo di un film", "born":"July 15, 1988"}
)
