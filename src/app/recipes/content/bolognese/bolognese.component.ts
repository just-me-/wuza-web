import { Component } from '@angular/core'

@Component({
  selector: 'wuza-bolognese',
  templateUrl: './bolognese.component.html',
})
export class BologneseComponent {
  ingredients: string[] = [
    '1kg Rindhackfleisch', '2 grosse Zwiebel', '5 Knoblauchzehen', '5dl Tomatensauce',
    '1 kleine Dose Tomatenmark', 'Öl zum anbraten', 'Etwas Salz und Zucker'
  ]

  images = [
    {img: 'bolognese_main', alt: 'Spaghetti Bolognese'}
  ]

}
