import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import { CommonModule } from '@angular/common'
import { ImageSliderComponent } from './image-slider.component'
import { register } from 'swiper/element/bundle'

register()

@NgModule({
  declarations: [ImageSliderComponent],
  exports: [
    ImageSliderComponent
  ],
  imports: [
    CommonModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ImageSliderModule { }
