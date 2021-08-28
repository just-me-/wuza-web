import { Component } from '@angular/core'

@Component({
  selector: 'wuza-tassenkuchen',
  templateUrl: './tassenkuchen.component.html',
})
export class TassenkuchenComponent {
  ingredients: string[] = [
    '30g Butter', '1 EL Milch', '2 EL Zucker', '1 Ei', '5 EL Mehl', '½ TL Backpulver',
    'Kakaopulve, Früchte, Nüsse oder Vanille nach Wahl'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
