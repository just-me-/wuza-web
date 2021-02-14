import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component'
import { RecipesRoutingModule } from './recipes-routing.module'
import { BananenComponent } from './content/bananen/bananen.component'
import { BasmatiReisComponent } from './content/basmati-reis/basmati-reis.component'
import { MandelkuchenComponent } from './content/mandelkuchen/mandelkuchen.component'
import { RizCasimirComponent } from './content/riz-casimir/riz-casimir.component'
import { SuesssauerComponent } from './content/suesssauer/suesssauer.component'
import { RecipeComponent } from './recipe/recipe.component'

@NgModule({
  declarations: [
    RecipeOverviewComponent,
    BananenComponent,
    BasmatiReisComponent,
    MandelkuchenComponent,
    RizCasimirComponent,
    SuesssauerComponent,
    RecipeComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
