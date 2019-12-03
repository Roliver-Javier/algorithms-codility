import { Component } from '@angular/core';
import { from,of, forkJoin } from 'rxjs';
import { flatMap,filter,map,distinct, tap,groupBy,mergeMap,toArray } from 'rxjs/operators';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  constructor(){
  }
}