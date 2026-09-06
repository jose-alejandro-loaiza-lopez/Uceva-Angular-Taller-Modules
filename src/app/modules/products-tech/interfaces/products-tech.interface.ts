/**
 * Interfaz que representa un producto de tecnología.
 *
 * Contiene la información detallada necesaria para mostrar un producto
 * de periféricos y componentes de tecnología en la tabla o en cualquier
 * componente de listado.
 *
 * @remarks
 * Cada producto debe tener un `id` único, un `name` descriptivo, una
 * `category` válida, una `brand`, un `price` en pesos colombianos, un
 * `stock` disponible, una disponibilidad (`isAvailable`) y una `rating`
 * de calificación.
 *
 * @example
 * ```ts
 * const producto: Product = {
 *   id: 1,
 *   name: 'Teclado Mecánico RGB',
 *   category: 'Periféricos',
 *   brand: 'Redragon',
 *   price: 240000,
 *   stock: 15,
 *   isAvailable: true,
 *   rating: 4.7
 * };
 * ```
 */
export interface Product {
    /** Identificador único del producto */
    id: number;

    /** Nombre o descripción del producto */
    name: string;

    /** Categoría del producto */
    category: ProductCategory;

    /** Marca del producto */
    brand: string;

    /** Precio del producto en pesos */
    price: number;

    /** Cantidad disponible en stock */
    stock: number;

    /** Indica si el producto está disponible para la venta */
    isAvailable: boolean;

    /** Calificación del producto (0 a 5) */
    rating: number;
}

/**
 * Tipo de categoría de producto de tecnología.
 *
 * @remarks
 * Este tipo restringe las categorías a los valores predefinidos:
 * - 'Periféricos'
 * - 'Monitores'
 * - 'Audio'
 * - 'Accesorios'
 * - 'Mobiliario'
 * - 'Iluminación'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const categoria: ProductCategory = 'Periféricos';
 * ```
 */
export type ProductCategory =
    | 'Periféricos'
    | 'Monitores'
    | 'Audio'
    | 'Accesorios'
    | 'Mobiliario'
    | 'Iluminación';
