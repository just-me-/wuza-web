import { Component } from '@angular/core'

@Component({
  selector: 'wuza-mandeln',
  templateUrl: './mandeln.component.html',
})
export class MandelnComponent {
  ingredients: string[] = [
    '1 Teil Mandeln', '1 Teil Zucker', '1 Päckchen Vanillezucker', '1 TL Zimt', 'ca. ½ Teil Wasser'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
