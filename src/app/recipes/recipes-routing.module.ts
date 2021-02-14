import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component'
import {SuesssauerComponent} from './content/suesssauer/suesssauer.component'
import {RizCasimirComponent} from './content/riz-casimir/riz-casimir.component'
import {MandelkuchenComponent} from './content/mandelkuchen/mandelkuchen.component'
import {BasmatiReisComponent} from './content/basmati-reis/basmati-reis.component'
import {BananenComponent} from './content/bananen/bananen.component'

const routes: Routes = [
  {
    path: '',
    component: RecipeOverviewComponent
  },
  {
    path: 'suesssauer',
    component: SuesssauerComponent
  },
  {
    path: 'riz-casimir',
    component: RizCasimirComponent
  },
  {
    path: 'mandelkuchen',
    component: MandelkuchenComponent
  },
  {
    path: 'basmati-reis',
    component: BasmatiReisComponent
  },
  {
    path: 'bananen',
    component: BananenComponent
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
