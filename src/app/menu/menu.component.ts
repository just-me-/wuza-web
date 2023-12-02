import { Component } from '@angular/core'

@Component({
  selector: 'wuza-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  menuEntries = [
    { name: 'Home', path: 'home', icon: 'home'},
    { name: 'Rezepte', path: 'rezepte', icon: 'restaurant'},

    // { name: 'Zitate', path: 'quotes', icon: 'bookmark'},
    { name: 'Projekte', path: 'projekte', icon: 'book'},
    // { name: 'Kontakt', path: 'contact', icon: 'face'},
    { name: 'Impressum', path: 'impressum', icon: 'account_balance'},
  ]

}
