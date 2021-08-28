import { Component } from '@angular/core'

@Component({
  selector: 'wuza-cheesecake',
  templateUrl: './cheesecake.component.html',
})
export class CheesecakeComponent {
  ingredients: string[] = [
    // todo fix me
    // Zutaten für den Boden
    '100g Butterkekse', '45g Butter', '1 EL Zucker',
    // Zutaten für den Belag
    '450 g Frischkäse (z.B. Philadelphia)', '300g Crème Fraîche', '4 Eier',
    '125g Zucker', '½ TL Salz', '35g Mehl', '1 Päckchen Vanillezucker', 'Bio Zitrone'
  ]

  images = [
    {img: 'cheesecake_main', alt: 'Cheesecake'},
    {img: 'cheesecake_end', alt: 'Cheesecake geschnitten'},
  ]

}
