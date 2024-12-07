import { Component } from '@angular/core'

@Component({
  selector: 'wuza-daisys-chilli',
  templateUrl: './daisys-chilli.component.html',
})
export class DaisysChilliComponent {
  ingredients: string[] = [
    '1kg Hackfleisch, Rind',
    '3 Cup Ketchup',
    '2 Zwiebeln',
    '3 Knoblauchzehen',
    '3 TL Chilipulver',
    '2 TL Kümmel',
    '4 TL Koriander',
    '4 TL Kardamom',
    '2 EL Zucker',
    '2 EL Essig',
    '2 Büchsen Kidneybohnen',
    '2 Büchsen Tomaten, gehackt'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]
}
