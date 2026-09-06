import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { PRODUCTS_TECH } from '../../../../core/config/products-tech.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableProductsTechComponent } from '../../components/table-products-tech/table-products-tech.component';
import { ProductsTechService } from '../../services/products-tech.service';
import { ListProductsTechComponent } from './list-products-tech.component';

describe('ListProductsTechComponent', () => {
  let component: ListProductsTechComponent;
  let fixture: ComponentFixture<ListProductsTechComponent>;
  let productsTechService: ProductsTechService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProductsTechComponent, TableProductsTechComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductsTechComponent);
    component = fixture.componentInstance;
    productsTechService = TestBed.inject(ProductsTechService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllProducts al iniciar', () => {
    const spyGetAllProducts = jest.spyOn(productsTechService, 'getAllProducts').mockReturnValue(of(PRODUCTS_TECH));
    fixture.detectChanges();
    expect(spyGetAllProducts).toHaveBeenCalled();
  });

  it('debería asignar los productos recibidos del servicio', () => {
    jest.spyOn(productsTechService, 'getAllProducts').mockReturnValue(of(PRODUCTS_TECH));
    fixture.detectChanges();
    expect(component.products).toEqual(PRODUCTS_TECH);
  });

  it('debería pasar los productos al componente table-products-tech', () => {
    jest.spyOn(productsTechService, 'getAllProducts').mockReturnValue(of(PRODUCTS_TECH));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableProductsTechComponent))
      .componentInstance;
    expect(tableComponent.products).toEqual(PRODUCTS_TECH);
  });

  it('debería manejar el error cuando falla getAllProducts', () => {
    component.products = [];
    const errorResponse = new Error('Error al cargar productos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(productsTechService, 'getAllProducts').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(productsTechService.getAllProducts).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.products.length).toBe(0);
  });

});
