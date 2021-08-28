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

  images = [
    {img: 'susssauer_main', alt: 'Süss-Sauer'},
    {img: 'susssauer_step1', alt: 'Gemüse anbraten', title: 'Das Gemüse anbraten'},
    {img: 'susssauer_step2', alt: 'Sauce anrühren', title: 'Die Sauce separat anrühren'},
    {img: 'susssauer_step3', alt: 'Köcheln lassen', title: 'Alles gemeinsam köcheln lassen'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
