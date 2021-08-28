import { Component } from '@angular/core'

@Component({
  selector: 'wuza-tomaten-poulet',
  templateUrl: './tomaten-poulet.component.html',
})
export class TomatenPouletComponent {
  ingredients: string[] = [
    'Oliven- oder Rappsöl', 'Poulet', 'Tomatenmark', '1-2 Zwiebeln',
    '1-2 Tomaten (Zitronensaft als Alternative)', 'Grossmutters Gewürzmischung'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
