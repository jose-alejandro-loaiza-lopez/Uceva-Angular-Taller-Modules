import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de productos de tecnología.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los productos de tecnología, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-products-tech></app-products-tech>
 * ```
 */
@Component({
  selector: 'app-products-tech',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class ProductsTechComponent { }
