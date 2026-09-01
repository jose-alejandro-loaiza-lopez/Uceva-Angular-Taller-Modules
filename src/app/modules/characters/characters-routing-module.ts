import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { ListCharacters } from './pages/list-characters/list-characters';

    const routes: Routes = [
      {
        path: 'list-characters',
        component: ListCharacters,
      },
      {
        path: '**',
        redirectTo: 'list-characters',
      },
    ];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule],
    })
    export class CharactersRoutingModule {}