import { Component } from '@angular/core'

@Component({
  selector: 'wuza-reis',
  templateUrl: './reis.component.html',
})
export class ReisComponent {
  ingredients: string[] = [
    '2 Becher Reis', 'Salz', 'Öl (, Mehl, Kartoffeln) für den Boden', 'Optional: Safran'
  ]
  // <h2>Zutaten (für zwei Personen)</h2> TODO

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
