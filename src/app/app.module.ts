import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BinaryGapComponent } from './binary-gap/binary-gap.component';
import { OddOccurrencesInArrayComponent } from './odd-occurrences-in-array/odd-occurrences-in-array.component';
import { CyclickRotationComponent } from './cyclick-rotation/cyclick-rotation.component';
import { FrogJumpComponent } from './frog-jump/frog-jump.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BinaryGapComponent, OddOccurrencesInArrayComponent, CyclickRotationComponent, FrogJumpComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
