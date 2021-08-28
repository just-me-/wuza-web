import { Component } from '@angular/core'

@Component({
  selector: 'wuza-enchiladas',
  templateUrl: './enchiladas.component.html',
})
export class EnchiladasComponent {
  ingredients: string[] = [
    '400g Pouletgeschnetzeltes (oder Hack)', '2 Zwiebeln', '2 Knoblauchzehen',
    '2 Peperoni', '1 Chilischote', '400g Tomatensauce',
    '1 Dose Kidneybohnen', '1 Dose Mais', 'Tortillas', '120g Käsekuchenmischung', 'Crème fraîche zum Servieren'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
