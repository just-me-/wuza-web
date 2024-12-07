import { Component } from '@angular/core'

@Component({
  selector: 'wuza-safran-pudding',
  templateUrl: './safran-pudding.component.html'
})
export class SafranPuddingComponent {

  ingredients: string[] = [
    '60g Milchreis',
    '80g Zucker',
    'Priese Safranfäden',
    '2 TL Maisstärke',
    '3 EL Rosenwasser'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]
}
