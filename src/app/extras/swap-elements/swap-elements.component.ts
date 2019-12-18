import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swap-elements',
  templateUrl: './swap-elements.component.html',
  styleUrls: ['./swap-elements.component.css']
})
export class SwapElementsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.solution([],[],0);
  }

  solution(A: number[],B,m){
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
    return false;
  }

}