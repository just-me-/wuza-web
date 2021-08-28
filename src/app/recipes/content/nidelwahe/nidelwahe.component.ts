import { Component } from '@angular/core'

@Component({
  selector: 'wuza-nidelwahe',
  templateUrl: './nidelwahe.component.html',
})
export class NidelwaheComponent {
  ingredients: string[] = [
    // <h2>Zutaten für den Teig</h2> TODO
    '1.5dl Milch', '1 Ei', '1 Prise Salz', '4 EL Öl', '60g Zucker', '350g Mehl', '2 TL Backpluver', '(Alternative: fertiger Butterteig)',
    // <h2>Zutaten für die Füllung</h2>
    '3.5dl Vollrahm', '2 Eigelb', '60g Zucker + etwas mehr zum Bestreuen', 'Etwas Butter'
  ]



  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
