import { Component } from '@angular/core'
import {ImageSliderImage} from '../../../common/image-slider/image-slider-image'

@Component({
  selector: 'wuza-easymech',
  templateUrl: './easymech.component.html'
})
export class EasymechComponent {

  imagesEasymech: ImageSliderImage[] = [
    {path: '/assets/img/projects/easymech_1.jpg', altText: 'Service bearbeiten'},
    {path: '/assets/img/projects/easymech_2.jpg', altText: 'Transaktion bearbeiten'},
    {path: '/assets/img/projects/easymech_3.jpg', altText: 'Vermietung erfassen'},
    {path: '/assets/img/projects/easymech_4.jpg', altText: 'Übersicht'}
  ]

  imagesArchitektur: ImageSliderImage[] = [
    {path: '/assets/img/projects/easymech_deployment.jpg', altText: 'Deployment'},
    {path: '/assets/img/projects/easymech_sequenz.jpg', altText: 'Sequenz'}
  ]

}
