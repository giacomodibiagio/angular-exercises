import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Address, Customer} from "./models";
import {Response} from "./response";
import {delay, fromEvent, map, merge, mergeAll, mergeMap} from "rxjs";

@Component({
  selector: 'app-mergemap-switchmap-exercise',
  template:  `
    <mat-card>
      <mat-card-content>
        <button #btn>Load user info</button>
      </mat-card-content>
    </mat-card>
   `,
  styles:  [``]
})
export class MergemapSwitchmapExerciseComponent implements AfterViewInit {

  constructor(private http: HttpClient) { }

  //URL
  getAllCustomersUrl = environment.basePaths.customerServer + "/listAll"
  getAllAddressUrl = environment.basePaths.customerServer + "/getAllAddress"

  //OBSERVABLES
  listAllCustomers$ = this.http.get<Response>(this.getAllCustomersUrl)
  listAllAddress$ = this.http.get<Response>(this.getAllAddressUrl)

  //CLASS PROPERTIES
  @ViewChild('btn') button!: ElementRef<HTMLInputElement>

  ngAfterViewInit(): void {

    fromEvent(this.button.nativeElement, 'click').pipe(
      map(() => this.listAllCustomers$)
    ).subscribe(resp => resp.subscribe(resp => {console.log(resp)}))

    //il solo operatore map non è sufficiente perché emetterà a sua sua volta un observable
    //(notare la doppia subscribe)
    //quindi per ovviare al problema è necessario usare mergeAll() dopo il map()

    fromEvent(this.button.nativeElement, 'click').pipe(
      map(() => this.listAllCustomers$),
      mergeAll()
    ).subscribe(resp => {console.log(resp)})

    //in questo modo gli observable vengono mergiati in uno e la seconda sub non è più necessaria
    //mergeMap() unisce map() e mergeAll()

    fromEvent(this.button.nativeElement, 'click').pipe(
      mergeMap(() => this.listAllCustomers$.pipe(delay(1000)))
    ).subscribe(resp => {console.log('aaaaaaaa', resp)})

    //sostituire mergeMap() con switchMap(), concatMap() e exhaustMap(), cliccare 3 volte in rapida successione sul bottone per vedere le differenze:
    //mergeMap(): ogni volta che l'outer obs emette un valore, l'inner obs sottoscrive ma non è garantito l'ordine dei valori emessi
    //concatMap():quando l'outer obs emette un valore, l'inner obs sottoscrive MA se l'outer obs emette un altro valore prima che la sottoscrizione al precedente sia conclusa, viene aggiunto ad una queue. In questo modo l'ordine delle chiamate è garantito
    //switchMap(): l'inner obs sottoscrive solo all'ultimo valore emesso dall'outer obs
    //exhaustMap(): l'inner obs sottoscrive al valore emesso dall'outer solo quando la chiamata della prima sub è conclusa. I valori emessi nel frattempo non vengono considerati

    // this.listAllAddress$.pipe(
    //   map(resp => resp.resp.addressList),
    //   mergeMap((res: Address[]) =>{
    //
    //   })
    // )
  }
}
