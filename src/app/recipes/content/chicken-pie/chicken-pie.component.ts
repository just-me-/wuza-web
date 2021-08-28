import { Component } from '@angular/core'

@Component({
  selector: 'wuza-chicken-pie',
  templateUrl: './chicken-pie.component.html',
})
export class ChickenpieComponent {
  ingredients: string[] = [
    'Mandeln',
  ]

  images = [
    {img: 'chicken_pie_main', alt: 'Chicken Pie'},
    {img: 'chicken_pie_step1', alt: 'Step 1'},
    {img: 'chicken_pie_step2', alt: 'Step 2'},
    {img: 'chicken_pie_step3', alt: 'Step 3'},
    {img: 'chicken_pie_end', alt: 'Step 4'},
    {img: 'chicken_pie_end2', alt: 'Gebacken'}
  ]

}
