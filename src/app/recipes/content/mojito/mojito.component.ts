import { Component } from '@angular/core'

@Component({
  selector: 'wuza-mojito',
  templateUrl: './mojito.component.html',
})
export class MojitoComponent {
  ingredients: string[] = [
    '4 TL Rohrzucker', '2 Limetten', 'Frische Minze', 'Weisser Rum', 'Mineralwasser mit Kohlensäure',
    'Eis zum kühlen und servieren', 'Optional: Pfefferminzsirup'
  ]
  // todo Zutaten für einen Liter

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
