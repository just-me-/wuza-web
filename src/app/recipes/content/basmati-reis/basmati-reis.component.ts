import { Component } from '@angular/core'

@Component({
  selector: 'wuza-basmati-reis',
  templateUrl: './basmati-reis.component.html'
})
export class BasmatiReisComponent {
  ingredients: string[] = [
    '1 Tasse Reis', '1,5 Tassen Wasser', '½ TL Salz'
  ]

  images = [
    {img: 'basmati_reis_main', alt: 'Basmati-Reis'},
  ]

}
