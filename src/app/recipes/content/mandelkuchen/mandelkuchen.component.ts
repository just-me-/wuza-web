import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'wuza-mandelkuchen',
  templateUrl: './mandelkuchen.component.html',
})
export class MandelkuchenComponent implements OnInit {
  ingredients: string[] = [
    '100g gemahlene Mandeln', '75g Puderzucker + zum Bestreuen', '1 EL Rahm',
    '2 Eier', 'ca. 375g Blätterteig', 'Optional: Apfelmus zum Servieren'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
