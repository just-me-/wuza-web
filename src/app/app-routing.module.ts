import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'rezepte',
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
