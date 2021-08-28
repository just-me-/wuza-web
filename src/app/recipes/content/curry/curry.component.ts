import { Component } from '@angular/core'

@Component({
  selector: 'wuza-curry',
  templateUrl: './curry.component.html',
})
export class CurryComponent {
  ingredients: string[] = [
    '3 Peperoni', '5dl Kokosnussmilch', 'Thai Kitchen Curry Paste (grün oder gelb)',
    'Optional: Bambussprosse', 'Babymais aus dem Glas', 'Grüne Bohnen (Dose)', '2 Zucchetti', 'Poulet', 'Naturjoghurt'
  ]

  images = [
    {img: 'curry_main', alt: 'Curry'},
    {img: 'curry_step1', alt: 'Poulet', title: 'Poulet anbraten'},
    {img: 'curry_step2', alt: 'Gemüse', title: 'Dann Gemüse anbraten'},
    {img: 'curry_step3', alt: 'Paste', title: 'Paste erwärmen'},
    {img: 'curry_step4', alt: 'Kokosnussmilch', title: 'Kokosnussmilch hinzugeben'},
    {img: 'curry_end', alt: 'Curry fertig'}
  ]

}
