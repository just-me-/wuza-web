import { Component } from '@angular/core'

@Component({
  selector: 'wuza-gluehwein',
  templateUrl: './gluehwein.component.html',
})
export class GluehweinComponent {
  ingredients: string[] = [
    '1l kräftigen Rotwein', '150g Rohrzucker (4 EL und mehr)', '3 Gewürznelken (Nägeli)', '3 Zimtstangen', '1 grosse Orange (Bio)'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
