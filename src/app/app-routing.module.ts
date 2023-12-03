import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {HomeComponent} from './home/home.component'
import {NotFoundComponent} from './not-found/not-found.component'
import {ImpressumComponent} from './impressum/impressum.component'

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
  },
  {
    path: 'projekte',
    loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
  },
  { path: 'impressum', component: ImpressumComponent},
  { path: '**', pathMatch: 'full', component: NotFoundComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
