import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'wuza-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menuEntries = [
    { name: 'Home', path: 'home', icon: 'home'},
    { name: 'Rezepte', path: 'rezepte', icon: 'book'},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
