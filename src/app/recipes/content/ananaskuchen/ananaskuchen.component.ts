import { Component } from '@angular/core'

@Component({
  selector: 'wuza-ananaskuchen',
  templateUrl: './ananaskuchen.component.html',
})
export class AnanaskuchenComponent {
  ingredients: string[] = [
    '250g Butter', '2 Cup Zucker', '4 Eier', '3 Cup Mehl', '1 Dose Ananas',
    '1 Päckchen Backpulver', '1 Päckchen Vanillezucker', 'Etwas Rohrzucker', 'Cocktailkirsche'
  ]

  images = [
    {img: 'ananaskuchen_main', alt: 'Ananaskuchen'},
    {img: 'ananaskuchen_1', alt: 'Boden'},
    {img: 'ananaskuchen_2', alt: 'Kuchenstück'}
  ]

}
