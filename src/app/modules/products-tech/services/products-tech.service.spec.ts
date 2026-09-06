import { TestBed } from '@angular/core/testing';
import { PRODUCTS_TECH } from '../../../core/config/products-tech.config';
import { ProductsTechService } from './products-tech.service';

describe('ProductsTechService', () => {
  let service: ProductsTechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsTechService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllProducts debería retornar un observable con los productos', (done) => {
    service.getAllProducts().subscribe(products => {
      expect(products).toEqual(PRODUCTS_TECH);
      expect(products.length).toBe(PRODUCTS_TECH.length);
      done();
    });
  });
});
