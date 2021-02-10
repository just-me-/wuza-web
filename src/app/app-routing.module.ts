import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'rezepte',
    loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
