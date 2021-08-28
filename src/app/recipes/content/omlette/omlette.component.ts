import { Component } from '@angular/core'

@Component({
  selector: 'wuza-omlette',
  templateUrl: './omlette.component.html',
})
export class OmletteComponent {
  ingredients: string[] = [
    '100g Mehl', '1 TL Salz', '2 Eier', '1dl Milch', '1dl Wasser', 'Butter oder Öl zum anbraten'
  ]
  // <h2>Zutaten für das Grundrezept (ca. 4 Stk.)</h2> TODO

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
