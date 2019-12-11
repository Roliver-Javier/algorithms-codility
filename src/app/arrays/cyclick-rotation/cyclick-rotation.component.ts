import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyclick-rotation',
  template: '',
  styleUrls: ['./cyclick-rotation.component.css']
})
export class CyclickRotationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const arr = [3,8,9,7,6];
    console.log(this.solution(arr, 3));
  }

  solution(A, K) {
    if (!A || A.length === 0) return [];

      for (let i = 0; i < K; i++) {
        const arr = A.pop();
        A = [arr, ...A];
      }
      return A;
  }

}