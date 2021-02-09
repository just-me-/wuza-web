import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeOverviewComponent
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
