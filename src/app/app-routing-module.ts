import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users-module').then(m => m.UsersModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products-module').then(m => m.ProductsModule)
  },
  {
    path: 'products-tech',
    loadChildren: () => import('./modules/products-tech/products-tech-module').then(m => m.ProductsTechModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./modules/tasks/tasks-module').then(m => m.TasksModule)
  },
  {
    path: 'characters',
    loadChildren: () => import('./modules/characters/characters-module').then(m => m.CharactersModule)
  },
  {
    path: '**',
    redirectTo: 'users'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
