import { Component } from '@angular/core'
import {ImageSliderImage} from '../../../common/image-slider/image-slider-image'

@Component({
  selector: 'wuza-taxviewer',
  templateUrl: './taxviewer.component.html'
})
export class TaxviewerComponent {
  imagesTaxviewer: ImageSliderImage[] = [
    {path: '/assets/img/projects/taxviewer_screendesign_einseitig.png', altText: 'Screendesign einseitig'},
    {path: '/assets/img/projects/taxviewer_screendesign_zweiseiten.png', altText: 'Screendesign zweiseitig', title: 'Screendesign zweiseitig'},
    {path: '/assets/img/projects/taxviewer_auszug_styleguide.png', altText: 'Auszug aus dem Styleguide', title: 'Auszug aus dem Styleguide'}
  ]
}
