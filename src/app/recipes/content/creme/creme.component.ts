import { Component } from '@angular/core'

@Component({
  selector: 'wuza-creme',
  templateUrl: './creme.component.html',
})
export class CremeComponent {
  ingredients: string[] = [
    '6dl Milch', '2 Eier', '3EL Zucker', '1EL Stärkemehl', '1 Vanilleschote oder 90g dunkle Schokolade', '(Himbeeren)'
  ]

  images = [
    {img: 'creme_main', alt: 'Crème'},
    {img: 'creme_step1', alt: 'Gekochte Beeren', title: 'Hervorragend mit Früchten'},
    {img: 'creme_step2', alt: 'Serviert'}
  ]

}
