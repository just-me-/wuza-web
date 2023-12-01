import { Component, OnInit } from '@angular/core'
import {ImageSliderImage} from '../../../common/image-slider/image-slider-image'

@Component({
  selector: 'wuza-wuza',
  templateUrl: './wuza.component.html',
  styles: [
  ]
})
export class WuzaComponent implements OnInit {

  imagesWuza: ImageSliderImage[] = [
    {path: '/assets/img/projects/wuza_original.jpg', title: 'WUZA besteht seit dem 12.12.15', altText: 'Wuza Original'},
    {path: '/assets/img/projects/wuza_menu.jpg', title: 'August 17 - eine modernere Menüleiste', altText: 'Wuza Menu'},
    {path: '/assets/img/projects/wuza_color.jpg', title: 'Neue Kategorie, neue Farben', altText: 'Wuza Color'},
    {path: '/assets/img/projects/wuza_fancybackground.jpg', title: 'Februar 20 - neues Design', altText: 'Wuza Background'},
  ]
  imagesAdmin: ImageSliderImage[] = [
    {path: '/assets/img/projects/wuza_admin_login.jpg', title: 'Login Bereich vom Backend', altText: 'Wuza Admin Login'},
    {path: '/assets/img/projects/wuza_admin_edit.jpg', title: 'Zitate hinzufügen, bearbeiten und löschen', altText: 'Wuza Admin Edit'},
    {path: '/assets/img/projects/wuza_admin_list.jpg', title: 'Zitatauflistung', altText: 'Wuza Admin List'},
  ]
  imagesColor: ImageSliderImage[] = [
    {path: '/assets/img/projects/wuza_website_maerstetten.jpg', title: 'buerger-maerstetten.ch', altText: 'Website Märstetten'},
    {path: '/assets/img/projects/wuza_website_fahrlehrer.jpg', title: 'meinfahrlehrer.ch', altText: 'Website Fahrlehrer'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
