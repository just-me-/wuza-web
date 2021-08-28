import { Component } from '@angular/core'

@Component({
  selector: 'wuza-burger',
  templateUrl: './burger.component.html',
})
export class BurgerComponent {
  // todo <h2>Zutaten für 4 Personen</h2>
  ingredients: string[] = [
    '8 Kartoffeln', '500g Rindshackfleisch', '1 Zwiebel',
    'Bratspeck',  '4 Bun (Brötchen)',  '1 Tomate'
  ]

  images = [
    {img: 'burger_main', alt: 'Burger'},
    {img: 'burger_step1', alt: 'Step 1'},
    {img: 'burger_step2', alt: 'Step 2'},
    {img: 'burger_step3', alt: 'Step 3'},
    {img: 'burger_step4', alt: 'Step 4'},
    {img: 'burger_step5', alt: 'Step 5'},
    {img: 'burger_end', alt: 'Angerichtet'}
  ]

}
