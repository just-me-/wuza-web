import { Component } from '@angular/core'

@Component({
  selector: 'wuza-cupcakes',
  templateUrl: './cupcakes.component.html',
})
export class CupcakeComponent {
  ingredients: string[] = [
    'Die Zutaten für dieses Rezept folgen später.',
  ]

  images = [
    {img: 'xx', alt: 'Cupcakes'},
    {img: 'xx', alt: 'Cupcakes Glasur'},
    {img: 'xx', alt: 'Cupcakes Heidelbeeren', title: 'Mit Heidelbeeren'}
  ]

}
