import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeOverviewComponent } from './recipe-overview/recipe-overview.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [RecipeOverviewComponent],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
