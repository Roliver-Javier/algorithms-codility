import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tape-equilibrium',
  template: '',
  styleUrls: ['./tape-equilibrium.component.css']
})
export class TapeEquilibriumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.Solution([1,2]));
  }
/*
[1][2] = 1 - 2 = -1


[1][1,2] = 1 - 3 = -2
[1,1][2] = 2 - 2 = 0

[5][6,2,4,1] = 5 - 13 = -8
[5,6][2,4,1] = 11 - 7 = 4
[5,6,2][4,1] = 13 - 5 = 8
[5,6,2,4][1] = 17 - 1 = 16

*/

  Solution(A: number[]){
    let arr1 = [], results = [], i = 0, copyArr = A;
    const length = A.length;
    while(i < length - 1){
      arr1.push(...copyArr.splice(0,1));
      let arr1Sum = this.sumArrElem(arr1);
      let arr2Sum = this.sumArrElem(copyArr);
      results.push( Math.abs(arr1Sum - arr2Sum));
      i++;
    }
    console.log(results);
    return this.getMinimalElem(results);
  }

  getMinimalElem(A: any[]){
    return A.sort((a,b)=> a < b? -1 : 1)[0];
  }
  
  sumArrElem(A: any[]){
    return A.reduce((a,b)=> a + b);
  }

}