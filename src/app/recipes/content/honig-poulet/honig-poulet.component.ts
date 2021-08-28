import { Component } from '@angular/core'

@Component({
  selector: 'wuza-honig-poulet',
  templateUrl: './honig-poulet.component.html',
})
export class HonigPouletComponent {
  ingredients: string[] = [
    'Poulet', '2 Zwiebeln', '2 EL Sesamkerne zum Garnieren', '2dl Bouillon',
    '2 EL Maisstärke', '4 EL Honig', '4 EL Soja', '4 EL Weissweinessig',
    '1 EL Sriracha Chili Sauce', '1 EL Ingwerpulver', 'Saft einer Zitrone'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
