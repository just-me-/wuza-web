import { Component } from '@angular/core'

@Component({
  selector: 'wuza-fritata',
  templateUrl: './fritata.component.html',
})
export class FritataComponent {
  ingredients: string[] = [
    '4 Wienerli', '2 Zwiebeln', '2 Zucchini', '2 Peperoni', 'Speckwürfel', 'Etwas Mehl',
    'Etwas Zitronensaft', '80g Le Gruyère, gerieben', 'Frische Kräuter nach Wahl', '1dl Milch',
    '6 frische Eier', 'Etwas Butter'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
