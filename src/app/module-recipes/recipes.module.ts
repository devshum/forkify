import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgModule } from '../module-svg/module-svg.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { MessageModule } from '../module-message/message.module';

import { ListComponent } from './list/list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  declarations: [
    RecipesComponent,
    ListComponent,
    RecipeComponent
  ],
  imports: [
    RecipesRoutingModule,
    CommonModule,
    MessageModule,
    SvgModule
  ]
})
export class RecipesModule { }
