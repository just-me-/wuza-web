import { Component } from '@angular/core'

@Component({
  selector: 'wuza-mandelkuchen',
  templateUrl: './mandelkuchen.component.html',
})
export class MandelkuchenComponent {
  ingredients: string[] = [
    '100g gemahlene Mandeln', '75g Puderzucker + zum Bestreuen', '1 EL Rahm',
    '2 Eier', 'ca. 375g Blätterteig', 'Optional: Apfelmus zum Servieren'
  ]

  images = [
    {img: 'mandelkuchen_main', alt: 'Mandelkuchen'},
    {img: 'mandelkuchen_1', alt: 'Aus dem Ofen'},
    {img: 'mandelkuchen_2', alt: 'Mit Puderzucker'},
    {img: 'mandelkuchen_3', alt: 'Mandelkuchen'},
  ]

}
