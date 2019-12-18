import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BinaryGapComponent } from './iterations/binary-gap/binary-gap.component';
import { FrogJumpComponent } from './time-complexity/frog-jump/frog-jump.component';
import { PermMissingElemComponent } from './time-complexity/perm-missing-elem/perm-missing-elem.component';
import { CyclickRotationComponent } from './arrays/cyclick-rotation/cyclick-rotation.component';
import { OddOccurrencesInArrayComponent } from './arrays/odd-occurrences-in-array/odd-occurrences-in-array.component';
import { TapeEquilibriumComponent } from './time-complexity/tape-equilibrium/tape-equilibrium.component';
import { CoutingElementsComponent } from './extras/couting-elements/couting-elements.component';
import { SwapElementsComponent } from './extras/swap-elements/swap-elements.component';


const algorithms = {
  iterations: [ 
    BinaryGapComponent 
  ],
  arrays: [ 
    OddOccurrencesInArrayComponent, 
    CyclickRotationComponent 
  ],
  timeComplexity: [ 
    FrogJumpComponent, 
    PermMissingElemComponent 
  ]
};

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
  ...algorithms.iterations,
  ...algorithms.arrays,  
  ...algorithms.timeComplexity, TapeEquilibriumComponent, CoutingElementsComponent, SwapElementsComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
