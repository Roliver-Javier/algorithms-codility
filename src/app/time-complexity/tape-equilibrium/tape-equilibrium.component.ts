import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tape-equilibrium',
  template: '',
  styleUrls: ['./tape-equilibrium.component.css']
})
export class TapeEquilibriumComponent implements OnInit {
  /*
    [7][5,1,7] = 7 - 13 = -6
    [7,5][1,7] = 12 - 8 = 4
    [7,5,1][7] = 13 - 7 = 6
*/
  constructor() { }

  ngOnInit() {
    let arr = [7, 5, 1, 7];
    new SlowSolution(arr);
    // new FastSolution(arr);
  }
}

class FastSolution{
  constructor(arr: number[]){
      console.log(this.Solution(arr));
  }

  Solution(A: number[]){
    let arr1 = [], arr2 = [];
    for(let i = 0, j = A.length; i < A.length; i++, j--){
      arr1.push(A[i]);
      console.log(A.splice(i, j));
    
    }
    console.log(arr1);
    console.log(arr2);
  }

}

class SlowSolution{
  constructor(arr: number[]){
    console.log(this.Solution(arr));
  }
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
    let previous = A[0];
    for(let i = 0; i < A.length ; i++){
      if(A[i] < previous)  previous = A[i];
    }
    return previous;
  }
  customSplice(A:number[], start, end){
    let arr = [], copyArr = A;
    if(start < end && A.length > 1){
      for(let i = 0; i < A.length; i++){
        if(i >= start  && i <= end - 1){
          arr.push(A[i]);
        }
      }
    }
    return arr;
  }
  sumArrElem(A: any[]){
    let total = 0;
    for(let i = 0; i < A.length; i++)
      total += A[i];
    return total;
  }
}