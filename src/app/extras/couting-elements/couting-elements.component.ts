import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-couting-elements',
  templateUrl: './couting-elements.component.html',
  styleUrls: ['./couting-elements.component.css']
})
export class CoutingElementsComponent implements OnInit {

  constructor() { }

  /**
   * [0,0,4,2,4,5] // numbers
   * [2,0,1,0,2,1] // count
   * [0,1,2,3,4,5] // indexes
   */
  ngOnInit() {
    let arr = [0,0,4,2,4,5];
    console.log(this.solution(arr));
  }

  solution(A){
    let obj = {};
    for(let i = 0; i < A.length; i++){
      if(!obj.hasOwnProperty(A[i])) obj[A[i]]= 1;
      else
       obj[A[i]] +=1;
    }
    return Object.values(obj);
  }

}