import { Component } from '@angular/core'

@Component({
  selector: 'wuza-waffeln',
  templateUrl: './waffeln.component.html',
})
export class WaffelnComponent {
  ingredients: string[] = [
    '125g Butter', '125g Zucker', '1 Prise Salz', '3 Eier', '250g Mehl', '1 TL Backpulver', '2,5dl Milch'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
