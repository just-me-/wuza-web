import { Component } from '@angular/core'

@Component({
  selector: 'wuza-french-toast',
  templateUrl: './french-toast.component.html',
})
export class FrenchToastComponent {
  ingredients: string[] = [
    'Toast- oder Weissbrot', 'Eier', 'Etwas Milch', 'Butter zum Anbraten'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
