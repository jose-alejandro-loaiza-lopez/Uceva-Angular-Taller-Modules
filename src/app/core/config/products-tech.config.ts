import { Product } from "../../modules/products-tech/interfaces/products-tech.interface";

/**
 * Listado de productos de tecnología disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * información detallada de periféricos y componentes de tecnología, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Product[]}
 */
export const PRODUCTS_TECH: Product[] = [
  {
    id: 1,
    name: 'Teclado Mecánico RGB Switch Red',
    category: 'Periféricos',
    brand: 'Redragon',
    price: 240000,
    stock: 15,
    isAvailable: true,
    rating: 4.7
  },
  {
    id: 2,
    name: 'Mouse Inalámbrico Ultra-Light 8000 DPI',
    category: 'Periféricos',
    brand: 'Logitech',
    price: 180000,
    stock: 8,
    isAvailable: true,
    rating: 4.8
  },
  {
    id: 3,
    name: 'Monitor IPS 27" 165Hz 1ms',
    category: 'Monitores',
    brand: 'LG',
    price: 950000,
    stock: 0,
    isAvailable: false,
    rating: 4.6
  },
  {
    id: 4,
    name: 'Audífonos Gaming 7.1 Surround',
    category: 'Audio',
    brand: 'HyperX',
    price: 210000,
    stock: 22,
    isAvailable: true,
    rating: 4.5
  },
  {
    id: 5,
    name: 'Micrófono Condensador USB',
    category: 'Audio',
    brand: 'Fifine',
    price: 160000,
    stock: 12,
    isAvailable: true,
    rating: 4.4
  },
  {
    id: 6,
    name: 'Mousepad XL Control Stitching',
    category: 'Accesorios',
    brand: 'VSG',
    price: 65000,
    stock: 30,
    isAvailable: true,
    rating: 4.3
  },
  {
    id: 7,
    name: 'Brazo para Monitor VESA Dual',
    category: 'Accesorios',
    brand: 'North Bayou',
    price: 130000,
    stock: 5,
    isAvailable: true,
    rating: 4.9
  },
  {
    id: 8,
    name: 'Cámara Web Full HD 60fps',
    category: 'Periféricos',
    brand: 'Logitech',
    price: 195000,
    stock: 0,
    isAvailable: false,
    rating: 4.2
  },
  {
    id: 9,
    name: 'Silla Ergonómica Mesh',
    category: 'Mobiliario',
    brand: 'Cougar',
    price: 620000,
    stock: 3,
    isAvailable: true,
    rating: 4.7
  },
  {
    id: 10,
    name: 'Barra de Luz LED para Monitor',
    category: 'Iluminación',
    brand: 'Baseus',
    price: 115000,
    stock: 18,
    isAvailable: true,
    rating: 4.8
  }
];
