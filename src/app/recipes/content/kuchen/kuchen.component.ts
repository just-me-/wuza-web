import { Component } from '@angular/core'

@Component({
  selector: 'wuza-kuchen',
  templateUrl: './kuchen.component.html',
})
export class KuchenComponent {
  ingredients: string[] = [
    '¾ Cup Butter', '2 Cup Zucker', '4 Eier', '¾ Cup Milch', '3 Cup Mehl',
    '¾ Päckchen Backpulver', '1 Päckchen Vanillezucker', '1 Prise Salz'
  ]
  // TODO
  // <h3>Optionale Glasur</h3>
  // <ul class="ingredients checkable noselect">
  //     <li>100g weisse Schokolade</li>
  //     <li>Lebensmittelfarbe nach Wahl</li>
  // </ul>

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
