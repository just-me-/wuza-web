import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'wuza-bananen',
  templateUrl: './bananen.component.html',
})
export class BananenComponent implements OnInit {
  ingredients: string[] = [
    '50g Butter', '160g Rohrzucker', '½ TL Zimt', '1dl Rum', '4 Bananen', '4 Kugeln Vanille Eis'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
