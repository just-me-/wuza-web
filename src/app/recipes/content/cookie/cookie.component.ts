import { Component } from '@angular/core'

@Component({
  selector: 'wuza-cookie',
  templateUrl: './cookie.component.html',
})
export class CookieComponent {
  ingredients: string[] = [
    '110g Butter', '170g Zucker', '1 Päckchen Vanillezucker', '½ TL Salz',
    '1 Ei', '100g Milchschokolade', '50g dunkle Schokoladenwürfelchen', '165g Mehl', '½ TL Backpulver'
  ]

  images = [
    {img: 'cookies_main', alt: 'Cookies'},
    {img: 'cookies_step1', alt: 'Cookies Schritt 1'},
    {img: 'cookies_step2', alt: 'Cookies Schritt 2'},
    {img: 'cookies_step3', alt: 'Cookies Schritt 2.2'},
    {img: 'cookies_step4', alt: 'Cookies Schritt 3'},
    {img: 'cookies_step5', alt: 'Cookies Schritt 5', title: 'Auseinanderschneiden falls verschmolzen'},
    {img: 'cookies_chocolate', alt: 'Cookies Chocolate', title: 'Tipp: statt Vanille Kakaopulver'},
    {img: 'cookies_collection', alt: 'Cookies Collection'},
  ]

}
