import { Component } from '@angular/core'

@Component({
  selector: 'wuza-schokoladenkuchen',
  templateUrl: './schokoladenkuchen.component.html',
})
export class SchokoladenkuchenComponent {
  ingredients: string[] = [
    '200g Milchschokolade', '4 Eier', '2 Tassen Zucker', '2 Tassen Mehl', '2 Tassen gemahlene Haselnüsse',
    '½ Tasse Schokoladenpulver', '1 Tasse Rahm', '1 EL Backpulver'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
