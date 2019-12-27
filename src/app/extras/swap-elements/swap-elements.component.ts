import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap-elements',
  template: '',
  styleUrls: ['./swap-elements.component.css']
})
export class SwapElementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.slowSolution([2,3],[4,1],0);
  }
  
  slowSolution(A: number[],B: number[],m){
    let n = A.length,
    sum_a = A.reduce((a,b)=>a+b),
    sum_b = B.reduce((a,b)=>a+b);

    for(let i = 0; i < n; i++){
      for(let j = 0; j < n; j++){
        let change = B[j] - A[i];
        sum_a += change;
        sum_b -= change;
        if(sum_a === sum_b){
          return true;
        }
        sum_a -= change;
        sum_b += change;
      }
    }
    console.log(sum_a);
    console.log(sum_b);
    return false;
  }

}