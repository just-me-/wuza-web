import { Component } from '@angular/core'

@Component({
  selector: 'wuza-kastanien-kuchen',
  templateUrl: './kastanien-kuchen.component.html'
})
export class KastanienKuchenComponent {

  ingredients: string[] = [
    '150g Butter',
    '150g Zucker',
    '3 Eier',
    '560g Marroni-Püree',
    'Halbe (Bio) Zitrone',
    '4 EL Grappa oder Kirsch',
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]
}
