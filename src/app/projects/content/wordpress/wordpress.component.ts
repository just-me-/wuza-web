import { Component, OnInit } from '@angular/core'
import {ImageSliderImage} from '../../../common/image-slider/image-slider-image'

@Component({
  selector: 'wuza-wordpress',
  templateUrl: './wordpress.component.html',
  styles: [
  ]
})
export class WordpressComponent implements OnInit {

  images: ImageSliderImage[] = [
    {path: '/assets/img/projects/wordpress_hangloose.gif', title: 'Hang Loose', altText: 'Hang Loose'},
    {path: '/assets/img/projects/wordpress_bellevisage.gif', title: 'Bellevisage', altText: 'Bellevisage'},
    {path: '/assets/img/projects/wordpress_bellevisage_1.jpg', altText: 'Bellevisage 1'},
    {path: '/assets/img/projects/wordpress_bellevisage_2.jpg', altText: 'Bellevisage 2'},
    {path: '/assets/img/projects/wordpress_sam.jpg', title: 'S.A.M. Musik', altText: 'SAM'},
    {path: '/assets/img/projects/wordpress_redi.jpg', title: 'Redi AG', altText: 'Redi'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
