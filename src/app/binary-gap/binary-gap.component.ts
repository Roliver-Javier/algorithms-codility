import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binary-gap',
  templateUrl: './binary-gap.component.html',
  styleUrls: ['./binary-gap.component.css']
})
export class BinaryGapComponent {
  constructor(){
    const binaryNum = this.convertToBinary(529);
    const gaps = this.getGaps(binaryNum);
    const results = (gaps.length !== 0)? this.getMaximalSequence(gaps): gaps;
    console.log('binario => ',binaryNum);
    console.log('Maxima secuencia => ',results);
    console.log('BinaryGap => ',results.length);
  }

  getMaximalSequence(arr){
    return arr.sort( (a,b)=> a.length > b.length ? -1: 1 )[0];
  } 

  getGaps(num: string){
    let arr = [], s = [];
    num.split('').forEach(val=>{
     if(val !== '1'){
       s.push(val);
     }else{
      if(s.length === 0) return; 
      arr.push([...s]);
      s = [];
     }
   });
   return arr;
  }

  convertToBinary(dec: number){
    let n = dec, numArr = [], mod = 0;
    while(n >= 2){
      mod = n % 2;
      numArr.push(mod);
      n = (n - mod) / 2;
    }
    numArr.push(n);
    numArr.reverse();
    return numArr.join('');
  }

}