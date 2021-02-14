import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'wuza-recipe-overview',
  templateUrl: './recipe-overview.component.html'
})
export class RecipeOverviewComponent implements OnInit {
  entries = [
    { name: 'Süss-Sauer', link: 'suesssauer'},
    { name: 'Riz Casimir', link: 'riz-casimir'},
    { name: 'Mandelkuchen', link: 'mandelkuchen'},
    { name: 'Basmati Reis', link: 'basmati-reis'},
    { name: 'Bananen', link: 'bananen'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
