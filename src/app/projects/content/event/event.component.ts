import { Component, OnInit } from '@angular/core'
import {ImageSliderImage} from '../../../common/image-slider/image-slider-image'

@Component({
  selector: 'wuza-event',
  templateUrl: './event.component.html',
  styles: [
  ]
})
export class EventComponent implements OnInit {

  images: ImageSliderImage[] = [
    {path: '/assets/img/projects/event_card.gif', title: 'Einladungskarte', altText: 'Card'},
    {path: '/assets/img/projects/event_bday.gif', title: 'BDay Programm', altText: 'BDay'},
    {path: '/assets/img/projects/event_xmas.gif', title: 'X-mas mit Schneefall', altText: 'X-mas'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
