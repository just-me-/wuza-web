import { Component } from '@angular/core'

@Component({
  selector: 'wuza-lasagne',
  templateUrl: './lasagne.component.html',
})
export class LasagneComponent {
  ingredients: string[] = [
    '2 EL Mehl', '2 EL Butter', '1l Milch', '2 Zwiebeln',
    '3 Knoblauchzehen', '300g - 400g Käsemischung', 'Lasagneblätter'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
