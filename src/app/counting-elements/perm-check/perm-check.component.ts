import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perm-check',
  template: 'PermCheck',
  styleUrls: ['./perm-check.component.css']
})
export class PermCheckComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var arr = [ 2, 3 ];
    console.log(this.SlowSolution(arr));
  }

  SlowSolution(A: number[]){
    const sourtedArr = A.sort();
    let res = 0;
    let i = 1;
    for(let num of sourtedArr){
      if(num !== i) return 0;
      else res = 1;
      i++;
    }
    return res;
  }
}