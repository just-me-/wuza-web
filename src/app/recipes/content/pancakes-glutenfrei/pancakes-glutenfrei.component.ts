import { Component } from '@angular/core'

@Component({
  selector: 'wuza-pancakes-glutenfrei',
  templateUrl: './pancakes-glutenfrei.component.html'
})
export class PancakesGlutenfreiComponent {
  ingredients: string[] = [
    '100g glutenfreies Mehl', '2 EL Rohzucker', '0.5 TL Backpulver', '0.5 TL Natron',
    '1 Ei', '1dl Milch', '100g Magerquark', '10g flüssige Butter',
    'Butter für die Pfanne', 'Ahornsirup zum Servieren'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
