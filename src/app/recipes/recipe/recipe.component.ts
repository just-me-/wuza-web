import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'wuza-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input()
  ingredients: string[] | undefined

  @Input()
  title: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
