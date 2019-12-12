import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frog-jump',
  templateUrl: './frog-jump.component.html',
  styleUrls: ['./frog-jump.component.css']
})
export class FrogJumpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.fastSolution(10,300,20));
    console.log(this.slowSolution(10,300,20));
  }

  fastSolution(X,Y,D){
    const distanceLeft = Y-X;
    let jumps = distanceLeft / D;
    if(jumps % D !== 0) jumps++;
    return Math.floor(jumps);
  }

  slowSolution(X,Y,D){
    let jumps = 0;
    while(X < Y){
      X = X + D;
      jumps++;
    }
    return jumps
  }

}