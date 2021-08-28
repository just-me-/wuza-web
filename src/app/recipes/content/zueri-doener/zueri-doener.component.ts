import { Component } from '@angular/core'

@Component({
  selector: 'wuza-zueri-doener',
  templateUrl: './zueri-doener.component.html',
})
export class ZueriDoenerComponent {
  ingredients: string[] = [
    '600g Kalbsgeschnetzeltes', '1 EL Mehl', '1 Zwiebel', '3 Paprika', '1 dl Weisswein oder Whiskey',
    '2 dl Vollrahm', '1 dl Fleischbouillon', '1 EL Maisstärke', 'Dose Champignons', 'Rösti (Fertigpackung)',
    'Weizentortillas', 'Etwas Petersilie', 'Naturjoghurt zum Servieren'
  ]

  images = [
    {img: 'xx', alt: 'xx'},
  ]

}
