import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perm-missing-elem',
  templateUrl: './perm-missing-elem.component.html',
  styleUrls: ['./perm-missing-elem.component.css']
})
export class PermMissingElemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.SolutionC([3,4]));
  }

  // 50% to 55%
  SolutionA(A: number[]){
    A = A.sort();
    let i = 0;
    if(A.length === 0) return 1;
    else
      for(let value of A){
        let expected = i + 1;
        if (expected !== value) 
          return expected;
        i++;
      }
    return i + 1;
  }
  // 60% to 66%
  SolutionB(A:number[]){
    A = A.sort();
    let result = 0, length = A.length;
    if(length === 0) return 1;
    else
    for(let n = 0; n < length; n++){  
      if(A[n] > 1 && (A[ n ] - 1) !== A[n - 1]){
        result = A[n] - 1;
      }
    }
    return (result !== 0)? result : A[length-1] + 1;
  }
  
  // 100%
  SolutionC(A:number[]){
    let n = A.length + 1;
    return (n + ( n * n - n )/ 2) - A.reduce((a,b)=> a + b );
  }


}