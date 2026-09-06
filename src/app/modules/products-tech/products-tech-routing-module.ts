import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsTechComponent } from './pages/list-products-tech/list-products-tech.component';

const routes: Routes = [
  {
    path: 'list-products-tech',
    component: ListProductsTechComponent
  },
  {
    path: '**',
    redirectTo: 'list-products-tech'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsTechRoutingModule { }
