import { Component } from '@angular/core'

@Component({
  selector: 'wuza-brownies-vegan',
  templateUrl: './brownies-vegan.component.html'
})
export class BrowniesVeganComponent {
  ingredients: string[] = [
    '100g Kokosöl oder Margarine',
    '350g dunkle Schokolade',
    '350g Rohzucker, grobkörnig',
    '300g gemahlene, geschälte Mandeln',
    '200g Mehl (glutenfrei)',
    '1 TL Backpulver',
    '1 Päckli Vanillezucker',
    '100g Baumnusskerne'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]
}
