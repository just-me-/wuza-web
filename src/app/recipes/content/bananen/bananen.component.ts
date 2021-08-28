import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'wuza-bananen',
  templateUrl: './bananen.component.html',
})
export class BananenComponent implements OnInit {
  ingredients: string[] = [
    '50g Butter', '160g Rohrzucker', '½ TL Zimt', '1dl Rum', '4 Bananen', '4 Kugeln Vanille Eis'
  ]

  images = [
    {img: 'bananen_main', alt: 'Gekochte Bananen'},
    {img: 'bananen_step1', alt: 'Zucker karamellisieren mit Butter'},
    {img: 'bananen_step2', alt: 'Bananen kochen'},
    {img: 'bananen_step3', alt: 'Warm servieren'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
