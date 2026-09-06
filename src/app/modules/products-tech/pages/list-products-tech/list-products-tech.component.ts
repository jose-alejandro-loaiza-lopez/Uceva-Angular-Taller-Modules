import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../interfaces/products-tech.interface';
import { ProductsTechService } from '../../services/products-tech.service';

/**
 * Componente contenedor de productos de tecnología.
 *
 * Se utiliza para gestionar y mostrar un listado de productos de tecnología
 * utilizando el componente `TableProductsTechComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `ProductsTechService`
 * para obtener los productos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-products-tech></app-list-products-tech>
 * ```
 */
@Component({
  selector: 'app-list-products-tech',
  template: `<app-table-products-tech [products]="products" ></app-table-products-tech>`,
  standalone: false,
})
export class ListProductsTechComponent implements OnInit {
  /**
   * Listado de productos obtenidos desde el servicio.
   * @type {Product[]}
   */
  products: Product[] = [];
  /**
   * Servicio para obtener productos.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private productsTechService = inject(ProductsTechService);

  /**
   * Inicializa el componente y carga los productos.
   * @remarks
   * Se suscribe al método `getAllProducts()` del servicio y
   * asigna los datos recibidos a la propiedad `products`.
   */
  ngOnInit(): void {
    this.productsTechService.getAllProducts().subscribe({
      next: (products) => this.products = products,
      error: (error) => console.error(error),
    })
  }
}
