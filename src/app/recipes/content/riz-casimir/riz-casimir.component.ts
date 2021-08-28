import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'wuza-riz-casimir',
  templateUrl: './riz-casimir.component.html',
})
export class RizCasimirComponent implements OnInit {
  ingredients: string[] = [
    'Poulet', '2 EL Curry', '1-2 EL Mehl', '3dl Bouillon', '1,5dl Rahm',
    'Dose Fruchtsalat', 'Beliebig weitere Früchte (Bananen, Mango)', 'Evt. etwas Maisstärke'
  ]

  images = [
    {img: 'riz_casimir_main', alt: 'Riz Casimir'},
    {img: 'riz_casimir_step1', alt: 'Früchte einkochen', title: 'Früchte hinzugeben'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
