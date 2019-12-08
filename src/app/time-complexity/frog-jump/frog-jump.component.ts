import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frog-jump',
  templateUrl: './frog-jump.component.html',
  styleUrls: ['./frog-jump.component.css']
})
export class FrogJumpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hola');
  }

}