import { Component } from '@angular/core'

@Component({
  selector: 'wuza-indisches-brot',
  templateUrl: './indisches-brot.component.html',
})
export class IndischesBrotComponent {
  ingredients: string[] = [
    '220ml warmes Wasser', '½ Päckchen Trockenhefe', '30g Zucker',
    '2 TL Malz', '3 EL Milch', '1 Ei', '2 TL Salz', '500g Mehl', '30g Butter', 'Öl zum ausbacken'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
