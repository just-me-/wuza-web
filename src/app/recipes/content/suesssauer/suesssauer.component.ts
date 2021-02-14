import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'wuza-suesssauer',
  templateUrl: './suesssauer.component.html',
})
export class SuesssauerComponent implements OnInit {
  ingredients: string[] = [
    'Poulet', '2 Zwiebeln', '3 Peperoni', '(Karotten, Bambussprossen)', '6 EL Apfelessig',
    '4 EL Ketchup', '1 EL Sojasauce', '2 EL Stärkemehl (Maisstärke)', 'Eingelegte Ananas, geschnitten (ca. 270g)',
    '150g Zucker', '3dl Wasser'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
