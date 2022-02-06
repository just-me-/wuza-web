import { Component } from '@angular/core'

@Component({
  selector: 'wuza-tiramisu',
  templateUrl: './tiramisu.component.html',
})
export class TiramisuComponent {
  ingredients: string[] = [
    '250g Mascarpone', '250g Léger Mascarpone',
    '3 Eier', '3 EL Zucker', '450g Früchte (z.B. Himbeeren) oder Kaffee',
    '2 Pack Löffelbiskuit'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
