import {Component, Input} from '@angular/core'
import {ImageSliderImage} from './image-slider-image'

@Component({
  selector: 'wuza-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent {
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
}
