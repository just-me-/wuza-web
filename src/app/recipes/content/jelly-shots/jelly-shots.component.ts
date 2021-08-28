import { Component } from '@angular/core'

@Component({
  selector: 'wuza-jelly-shots',
  templateUrl: './jelly-shots.component.html',
})
export class JellyShotsComponent {
  ingredients: string[] = [
    '1 Beutel Götterspeise (Wackelpudding)', 'Zucker (Menge nach Packungsanleitung)',
    'Wasser (die halbe Menge nach Packungsanleitung)', 'Wodka (die andere Hälfte des angegebenen Wasseranteils)'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
