import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'wuza-basmati-reis',
  templateUrl: './basmati-reis.component.html'
})
export class BasmatiReisComponent implements OnInit {
  ingredients: string[] = [
    '1 Tasse Reis', '1,5 Tassen Wasser', '½ TL Salz'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
