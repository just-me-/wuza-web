import { Component } from '@angular/core'

@Component({
  selector: 'wuza-lebkuchen',
  templateUrl: './lebkuchen.component.html',
})
export class LebkuchenComponent {
  ingredients: string[] = [
    '500g Ruchmehl', '400g Rohrzucker', '1 Päckchen Backpulver', '2 EL Schokoladenpulver',
    '2 EL Lebkuchengewürz', '2 EL Öl', '3 EL Honig', '6dl Milch', 'Oblaten / Esspapier für den Boden'
  ]
  // todo
  // <h3>Optionaler Zuckerguss</h3>
  // <ul class="ingredients checkable noselect">
  //     <li>1 Ei</li>
  //     <li>160g Puderzucker</li>
  //     <li>Allenfalls Lebensmittelfarbe</li>
  // </ul>

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
