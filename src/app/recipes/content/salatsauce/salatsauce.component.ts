import { Component } from '@angular/core'

@Component({
  selector: 'wuza-salatsauce',
  templateUrl: './salatsauce.component.html',
})
export class SalatsauceComponent {
  ingredients: string[] = [
    '2 EL Essig', '1 EL Mayonnaise', '1 TL Senf', '4 EL Olivenöl', '1 Zwiebel', '2 Knoblauchzehen', 'Schnittlauch'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
