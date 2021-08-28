import { Component } from '@angular/core'

@Component({
  selector: 'wuza-tee',
  templateUrl: './tee.component.html',
})
export class TeeComponent {
  ingredients: string[] = [
    '100g Earl Grey', '100g Darjeeling', '50g Kardamom'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
