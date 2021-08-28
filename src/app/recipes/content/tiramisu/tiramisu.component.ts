import { Component } from '@angular/core'

@Component({
  selector: 'wuza-tiramisu',
  templateUrl: './tiramisu.component.html',
})
export class TiramisuComponent {
  ingredients: string[] = [
    '30g Butter', '1 EL Milch', '2 EL Zucker', '1 Ei', '5 EL Mehl', '½ TL Backpulver',
    'Kakaopulve, Früchte, Nüsse oder Vanille nach Wahl'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
