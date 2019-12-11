import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tape-equilibrium',
  templateUrl: './tape-equilibrium.component.html',
  styleUrls: ['./tape-equilibrium.component.css']
})
export class TapeEquilibriumComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.Solution([3,1,2,4,3]);
  }

  Solution(A: number[]){
    let arr1 = [], arr2 = [];
    let copyArr = A;
    for(let i = 1; i < A.length; i++){
     arr1.push(...copyArr.splice(0,i));
     console.log(i);
     console.log(arr1);
     console.log(copyArr);
      copyArr = A;
    }

    // console.log(copyArr.splice(0,1));
    // console.log(copyArr.splice(0,2));
    // console.log(copyArr.splice(0,1));
  
  }

  sumArrElem(A: any[]){
    return A.reduce((a,b)=> a + b);
  }

}