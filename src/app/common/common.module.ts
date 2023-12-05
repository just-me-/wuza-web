import { NgModule } from '@angular/core'
import {BubblesDirective} from './directives/bubbles.directive'
import {SlideIntoDirective} from './directives/slide-into.directive'

@NgModule({
  declarations: [],
  imports: [
    BubblesDirective,
    SlideIntoDirective
  ],
  exports: [
    BubblesDirective,
    SlideIntoDirective
  ]
})
export class WuzaCommonModule { }
