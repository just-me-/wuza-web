import { Injectable } from '@angular/core'

@Injectable()
export class RecipesService {
  entries = [
    { name: 'Süss-Sauer', link: 'suesssauer', imageCount: 3},
    { name: 'Riz Casimir', link: 'riz-casimir', imageCount: 1},
    { name: 'Mandelkuchen', link: 'mandelkuchen', imageCount: 3},
    { name: 'Gebrannte Mandeln', link: 'mandeln', imageCount: 2},
    { name: 'Basmati Reis', link: 'basmati-reis', imageCount: 0},
    { name: 'Gekochte Bananen', link: 'bananen', imageCount: 3},
    { name: 'Ananaskuchen', link: 'ananaskuchen', imageCount: 2},
    { name: 'Spaghetti Bolognese', link: 'bolognese', imageCount: 0},
    { name: 'Burger mit Country Cuts', link: 'burger', imageCount: 6},
    { name: 'Cheesecake', link: 'cheesecake', imageCount: 1},
    { name: 'Chicken Pie', link: 'chickenpie', imageCount: 5},
    { name: 'American Cookies', link: 'cookie', imageCount: 7},
    { name: 'Crème', link: 'creme', imageCount: 2},
    { name: 'Cupcakes', link: 'cupcake', imageCount: 2},
    { name: 'Curry', link: 'curry', imageCount: 5},
    { name: 'Enchiladas', link: 'enchiladas', imageCount: 6},
    { name: 'French Toast', link: 'french-toast', imageCount: 0},
    { name: 'Frittata', link: 'fritata', imageCount: 3},
    { name: 'Glühwein', link: 'gluehwein', imageCount: 2},
    { name: 'Asiatisches Honig Poulet', link: 'honig-poulet', imageCount: 2},
    { name: 'Indisches Fladenbrot', link: 'indisches-brot', imageCount: 0},
    { name: 'Jelly Shots', link: 'jelly-shots', imageCount: 0},
    { name: 'Kuchen', link: 'kuchen', imageCount: 3},
    { name: 'Lasagne', link: 'lasagne', imageCount: 4},
    { name: 'Lebkuchen', link: 'lebkuchen', imageCount: 5},
    { name: 'Mojito', link: 'mojito', imageCount: 7},
    { name: 'Nidelwähe', link: 'nidelwaehe', imageCount: 1},
    { name: 'Poulet aus dem Ofen', link: 'ofen-poulet', imageCount: 1},
    { name: 'Schweizer Omelette', link: 'omlette', imageCount: 4},
    { name: 'Pancakes', link: 'pancakes', imageCount: 0},
    { name: 'Pancakes (glutenfrei)', link: 'pancakes-glutenfrei', imageCount: 0},
    { name: 'Persischer Reis', link: 'reis', imageCount: 0},
    { name: 'Französische Salatsauce', link: 'salatsauce', imageCount: 0},
    { name: 'Schokoladenkuchen', link: 'schokoladenkuchen', imageCount: 0},
    { name: 'Tassenkuchen', link: 'tassenkuchen', imageCount: 1},
    { name: 'Persischer Schwarztee', link: 'tee', imageCount: 1},
    { name: 'Tiramisu', link: 'tiramisu', imageCount: 0},
    { name: 'Waffeln', link: 'waffeln', imageCount: 0},
    { name: 'Waffeln (glutenfrei)', link: 'waffeln-glutenfrei', imageCount: 0},
    { name: 'Züri-Döner', link: 'zueri-doener', imageCount: 2},
    { name: 'Tomaten Poulet', link: 'tomaten-poulet', imageCount: 8},
    { name: 'Sizilianische Pasta', link: 'pasta', imageCount: 2},
    { name: 'Safran Pudding', link: 'safran-pudding', imageCount: 0},
    { name: 'Kastanien-Kuchen', link: 'kastanien-kuchen', imageCount: 0},
    { name: 'Daisy\'s Chilli', link: 'daisys-chilli', imageCount: 0},
    { name: 'Brownies (vegan)', link: 'brownies-vegan', imageCount: 0}
  ]

  imageCountByLink = (link: string): number => this.entries.find(
    (e) => e.link === link
  )?.imageCount ?? 0
}
