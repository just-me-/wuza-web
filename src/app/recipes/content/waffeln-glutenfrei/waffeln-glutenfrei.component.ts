import { Component } from '@angular/core'

@Component({
  selector: 'wuza-waffeln',
  templateUrl: './waffeln-glutenfrei.component.html',
})
export class WaffelnGlutenfreiComponent {
  ingredients: string[] = [
    '125g Butter', '100g Zucker',
    '1 Pack Vanillezucker', '3 Eier',
    '220g Mehl (Schaer Kekse und Kuchen)',
    '1 TL Backpulver', '2dl Milch'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
