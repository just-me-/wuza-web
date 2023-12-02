import { Component } from '@angular/core'
import {ImageSliderImage} from '../../../common/image-slider/image-slider-image'

@Component({
  selector: 'wuza-teso-addons',
  templateUrl: './teso-addons.component.html',
  styles: [
  ]
})
export class TesoAddonsComponent {
  imagesRez: ImageSliderImage[] = [
    {path: '/assets/img/projects/teso_addons_rez1.jpg', title: 'Ein Pfeil zeigt die Richtung', altText: 'Rez Screen 1'},
    {path: '/assets/img/projects/teso_addons_rez2.jpg', title: 'Je nach Laufrichtung ändert sich die Farbe', altText: 'Rez Screen 2'},
    {path: '/assets/img/projects/teso_addons_rez3.jpg', altText: 'Rez Screen 3'},
    {path: '/assets/img/projects/teso_addons_rez4.jpg', title: 'Ein Auszug der Einstellungen', altText: 'Rez Screen 4'},
    {path: '/assets/img/projects/teso_addons_rez5.jpg', title: 'Falls man sich direkt über dem Spieler befindet', altText: 'Rez Screen 5'},
    {path: '/assets/img/projects/teso_addons_rez6.jpg', title: 'Lichtstrahl zur besseren Orientierung', altText: 'Rez Screen 6'}
  ]
  imagesHeal: ImageSliderImage[] = [
    {path: '/assets/img/projects/teso_addons_heal1.jpg', altText: 'Heal Screen 1'},
    {path: '/assets/img/projects/teso_addons_heal2.jpg', altText: 'Heal Screen 2'},
    {path: '/assets/img/projects/teso_addons_heal3.jpg', title: 'Ein Auszug der Einstellungen', altText: 'Heal Screen 3'},
  ]
  imagesRaid: ImageSliderImage[] = [
    {path: '/assets/img/projects/teso_addons_raid1.jpg', title: 'Schadenstabelle', altText: 'Raid Screen 1'},
    {path: '/assets/img/projects/teso_addons_raid2.jpg', title: 'Pausentimer', altText: 'Raid Screen 2'},
  ]

}
