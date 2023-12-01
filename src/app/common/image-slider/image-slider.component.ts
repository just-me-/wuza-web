import {AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, Input} from '@angular/core'
import {ImageSliderImage} from './image-slider-image'
import {register} from 'swiper/swiper-element'
//import {SwiperOptions} from 'swiper/types'

@Component({
  selector: 'wuza-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements AfterViewInit {
  @Input() images?: ImageSliderImage[]

  swiperConfig: any /*SwiperOptions*/ = {
    initialSlide: 0,
    speed: 500,
    autoplay: {
      delay: 3500
    },
    pagination: {
      type: 'bullets',
      clickable: 'true'
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  ngAfterViewInit(): void {
    register()
  }
}
