import { Component } from '@angular/core'

@Component({
  selector: 'wuza-pancakes',
  templateUrl: './pancakes.component.html',
})
export class PancakesComponent {
  ingredients: string[] = [
    '180g Mehl', '1 EL Zucker', '1 TL Backpulver', '¼ TL Salz', '¼ TL Natron',
    '2 Eier', '250ml Milch', '3 EL Öl', 'Butter für die Pfanne', 'Ahornsirup zum Servieren'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
