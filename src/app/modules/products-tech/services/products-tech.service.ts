import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PRODUCTS_TECH } from '../../../core/config/products-tech.config';
import { Product } from '../interfaces/products-tech.interface';

/**
 * Servicio para gestionar productos de tecnología.
 *
 * Se encarga de proporcionar métodos para obtener los productos de tecnología
 * de la aplicación. Actualmente devuelve un listado de productos de ejemplo
 * definidos en `PRODUCTS_TECH`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a los productos.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private productsTechService: ProductsTechService) {}
 *
 * ngOnInit() {
 *   this.productsTechService.getAllProducts().subscribe(products => {
 *     console.log(products);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ProductsTechService {
  /**
   * Obtiene todos los productos de tecnología disponibles.
   *
   * @returns Observable con el listado de productos (`Product[]`).
   */
  getAllProducts(): Observable<Product[]> {
    return of(PRODUCTS_TECH);
  }
}
