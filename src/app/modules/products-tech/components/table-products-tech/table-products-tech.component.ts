import { Component, Input } from '@angular/core';
import { BadgeType, BadgeTypeText } from '../../../shared/interfaces/badge.interface';
import { Product, ProductCategory } from '../../interfaces/products-tech.interface';

/**
 * Componente de tabla de productos de tecnología.
 *
 * Se utiliza para mostrar un listado de productos de tecnología en una tabla,
 * mostrando información como id, nombre, marca, categoría, precio, stock,
 * disponibilidad, calificación y un badge visual que indica la categoría
 * de cada producto.
 *
 * @remarks
 * Este componente recibe los productos desde un componente padre
 * a través del Input `products` y utiliza el mapeo `categoryMap`
 * para asignar colores a los badges según la categoría y el mapeo
 * `availabilityMap` para la disponibilidad.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-products-tech [products]="productsList"></app-table-products-tech>
 * ```
 */
@Component({
  selector: 'app-table-products-tech',
  templateUrl: './table-products-tech.component.html',
  standalone: false,
})
export class TableProductsTechComponent {
  /**
   * Listado de productos que se mostrarán en la tabla.
   * @type {Product[]}
   * @remarks
   * Este Input permite pasar un array de productos desde un componente padre,
   * generalmente `ListProductsTechComponent`. Cada producto debe cumplir la interfaz `Product`.
   */
  @Input() products: Product[] = [];
  /**
   * Mapeo de categorías de productos a tipos de Badge.
   * @type {Record<ProductCategory, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada categoría:
   * - 'Periféricos' → 'primary' (azul)
   * - 'Monitores' → 'info' (celeste)
   * - 'Audio' → 'warning' (amarillo)
   * - 'Accesorios' → 'secondary' (gris)
   * - 'Mobiliario' → 'dark' (oscuro)
   * - 'Iluminación' → 'light' (claro)
   *
   * Esto permite que en la tabla cada producto tenga un badge visual que indique su categoría
   * de forma clara para el usuario.
   */
  categoryMap: Record<ProductCategory, BadgeType> = {
    'Periféricos': 'primary',
    'Monitores': 'info',
    'Audio': 'warning',
    'Accesorios': 'secondary',
    'Mobiliario': 'dark',
    'Iluminación': 'light',
  }
  /**
   * Mapeo de disponibilidad a tipo de texto del Badge.
   * @type {Record<ProductCategory, BadgeTypeText>}
   * @remarks
   * Se utiliza para asignar el color del texto según la categoría del badge:
   * - 'Iluminación' (claro) → 'text-dark'
   * - El resto → 'text-white'
   */
  categoryTextMap: Record<ProductCategory, BadgeTypeText> = {
    'Periféricos': 'text-white',
    'Monitores': 'text-white',
    'Audio': 'text-white',
    'Accesorios': 'text-white',
    'Mobiliario': 'text-white',
    'Iluminación': 'text-dark',
  }
  /**
   * Mapeo de disponibilidad a tipos de Badge.
   * @type {Record<'Disponible' | 'Agotado', BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges según la disponibilidad del producto:
   * - Disponible → 'success' (verde)
   * - Agotado → 'danger' (rojo)
   */
  availabilityMap: Record<'Disponible' | 'Agotado', BadgeType> = {
    'Disponible': 'success',
    'Agotado': 'danger',
  }
}
