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
    { name: 'Gebrannte Mandeln', link: 'mandeln'},
    { name: 'Basmati Reis', link: 'basmati-reis'},
    { name: 'Gekochte Bananen', link: 'bananen'},
    { name: 'Ananaskuchen', link: 'ananaskuchen'},
    { name: 'Spaghetti Bolognese', link: 'bolognese'},
    { name: 'Burger mit Country Cuts', link: 'burger'},
    { name: 'Cheesecake', link: 'cheesecake'},
    { name: 'Chicken Pie', link: 'chickenpie'},
    { name: 'American Cookies', link: 'cookie'},
    { name: 'Crème', link: 'creme'},
    { name: 'Cupcakes', link: 'cupcake'},
    { name: 'Curry', link: 'curry'},
    { name: 'Enchiladas', link: 'enchiladas'},
    { name: 'French Toast', link: 'french-toast'},
    { name: 'Frittata', link: 'fritata'},
    { name: 'Glühwein', link: 'gluehwein'},
    { name: 'Asiatisches Honig Poulet', link: 'honig-poulet'},
    { name: 'Indisches Fladenbrot', link: 'indisches-brot'},
    { name: 'Jelly Shots', link: 'jelly-shots'},
    { name: 'Kuchen', link: 'kuchen'},
    { name: 'Lasagne', link: 'lasagne'},
    { name: 'Lebkuchen', link: 'lebkuchen'},
    { name: 'Mojito', link: 'mojito'},
    { name: 'Nidelwähe', link: 'nidelwaehe'},
    { name: 'Poulet aus dem Ofen', link: 'ofen-poulet'},
    { name: 'Schweizer Omelette', link: 'omlette'},
    { name: 'Pancakes', link: 'pancakes'},
    { name: 'Persischer Reis', link: 'reis'},
    { name: 'Französische Salatsauce', link: 'salatsauce'},
    { name: 'Schokoladenkuchen', link: 'schokoladenkuchen'},
    { name: 'Tassenkuchen', link: 'tassenkuchen'},
    { name: 'Persischer Schwarztee', link: 'tee'},
    { name: 'Tiramisu', link: 'tiramisu'},
    { name: 'Waffeln', link: 'waffeln'},
    { name: 'Züri-Döner', link: 'zueri-doener'},
    { name: 'Tomaten Poulet', link: 'tomaten-poulet'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
