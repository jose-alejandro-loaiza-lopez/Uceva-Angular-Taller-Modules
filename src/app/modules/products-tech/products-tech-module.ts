import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TableProductsTechComponent } from './components/table-products-tech/table-products-tech.component';
import { ListProductsTechComponent } from './pages/list-products-tech/list-products-tech.component';
import { ProductsTechComponent } from './products-tech.component';
import { ProductsTechRoutingModule } from './products-tech-routing-module';

@NgModule({
  declarations: [
    ListProductsTechComponent,
    TableProductsTechComponent,
    ProductsTechComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsTechRoutingModule
  ]
})
export class ProductsTechModule { }
