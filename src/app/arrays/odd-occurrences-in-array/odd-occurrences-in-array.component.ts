import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-occurrences-in-array',
  template: '',
  styleUrls: ['./odd-occurrences-in-array.component.css']
})
export class OddOccurrencesInArrayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const arr = [ 9,3,9,3,9,4,4,2,3,9];
    console.log(this.veryFastSolution(arr));
  }

  veryFastSolution(arr){
    let result = 0;
    for(let elem of arr){
       result ^= elem;
    }
    return result;
  }

  fastSolution(arr){
    let obj = {}, 
    resultValue, 
    lastVal = 0, 
    lastObj = '';
    arr.forEach(val=>{
        obj[val] = (obj[val])? obj[val] + 1 : 1;
    });
    for (let ob in obj) {
      if (lastVal === 0 || obj[ob] < lastVal) {
        lastVal = obj[ob];
        lastObj = ob;
      }
      resultValue = lastObj;
    }
    return Number(resultValue) ;
  }

  slowSolution(arr){
    let result = [];
    arr.forEach(val=>{
        const occurrences = this.checkDuplicates(val, arr);
        if(occurrences.length === 1) result = occurrences[0];
    });
    return  result;
  }

  checkDuplicates(num: number, arr: any[]){
      return arr.filter(val=> val === num);
  }

}