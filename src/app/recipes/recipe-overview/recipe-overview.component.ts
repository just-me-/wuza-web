import {Component} from '@angular/core'
import {RecipesService} from '../recipes.service'

@Component({
  selector: 'wuza-recipe-overview',
  templateUrl: './recipe-overview.component.html',
  styleUrls: ['./recipe-overview.component.scss']
})
export class RecipeOverviewComponent {
  entries: any[] = []

  constructor(private recipesService: RecipesService) {
    this.entries = this.shuffle(this.recipesService.entries)
  }

  private shuffle(array: any[]): any[] {
    return array.sort(() => Math.random() - 0.5)
  }
}
