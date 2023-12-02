import { Component } from '@angular/core'
import {ImageSliderImage} from '../../../common/image-slider/image-slider-image'

@Component({
  selector: 'wuza-build-tool',
  templateUrl: './build-tool.component.html',
  styles: [
  ]
})
export class BuildToolComponent {
  imagesSmall: ImageSliderImage[] = [
    {path: '/assets/img/projects/build_tool_small_1.jpg', title: 'Smartphone Ansicht', altText: 'Build Tool Small View 1'},
    {path: '/assets/img/projects/build_tool_small_2.jpg', altText: 'Build Tool Small View 2'},
    {path: '/assets/img/projects/build_tool_small_3.jpg', altText: 'Build Tool Small View 3'},
    {path: '/assets/img/projects/build_tool_small_4.jpg', title: 'Build Bearbeitung', altText: 'Build Tool Small View 4'},
    {path: '/assets/img/projects/build_tool_small_5.jpg', title: 'Validierung', altText: 'Build Tool Small View 5'},
  ]

  imagesMiddle: ImageSliderImage[] = [
    {path: '/assets/img/projects/build_tool_middle_1.jpg', title: 'Tablet Ansicht', altText: 'Build Tool Middle View 1'},
    {path: '/assets/img/projects/build_tool_middle_2.jpg', altText: 'Build Tool Middle View 2'},
    {path: '/assets/img/projects/build_tool_middle_3.jpg', altText: 'Build Tool Middle View 3'},
    {path: '/assets/img/projects/build_tool_middle_4.jpg', altText: 'Build Tool Middle View 4'}
  ]

  imagesBig: ImageSliderImage[] = [
    {path: '/assets/img/projects/build_tool_big_1.jpg', title: 'Desktop Ansicht', altText: 'Build Tool Big View 1'},
    {path: '/assets/img/projects/build_tool_big_2.jpg', title: 'Geöffnete Detailbeschreibung', altText: 'Build Tool Big View 2'},
    {path: '/assets/img/projects/build_tool_big_3.jpg', title: 'Ansicht Build erfassen', altText: 'Build Tool Big View 3'},
    {path: '/assets/img/projects/build_tool_big_4.jpg', title: 'Bearbeitung', altText: 'Build Tool Big View 4'},
    {path: '/assets/img/projects/build_tool_big_5.jpg', altText: 'Build Tool Big View 5'}
  ]

}
