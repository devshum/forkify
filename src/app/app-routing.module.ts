import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'recipes'
  },
  { path: 'recipes', loadChildren: () => import('./module-recipes/recipes.module').then(m => m.RecipesModule) },
  {
    path: '**',
    redirectTo: 'recipes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
