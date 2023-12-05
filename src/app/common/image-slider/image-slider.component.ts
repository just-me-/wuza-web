import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core'
import {ImageSliderImage} from './image-slider-image'
import {SwiperContainer} from 'swiper/swiper-element'
import {SwiperOptions} from 'swiper/types'

@Component({
  selector: 'wuza-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements AfterViewInit {
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>

  @Input() images?: ImageSliderImage[]

  swiperConfig: SwiperOptions = {
    initialSlide: 0,
    speed: 500,
    autoplay: {
      disableOnInteraction: false,
      delay: 3500
    },
    pagination: {
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = 0
  }
}
