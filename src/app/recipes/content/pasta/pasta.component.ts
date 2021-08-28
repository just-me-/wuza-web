import { Component } from '@angular/core'

@Component({
  selector: 'wuza-pasta',
  templateUrl: './pasta.component.html',
})
export class PastaComponent {
  ingredients: string[] = [
    'Poulet', 'Glas Kapern', '500g Kirschtomaten', '1 EL Oregano', 'Teigwaren', 'Etwas Olivenöl'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
