import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PRODUCTS_TECH } from '../../../../core/config/products-tech.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableProductsTechComponent } from './table-products-tech.component';

describe('TableProductsTechComponent', () => {
  let component: TableProductsTechComponent;
  let fixture: ComponentFixture<TableProductsTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableProductsTechComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableProductsTechComponent);
    component = fixture.componentInstance;
    component.products = PRODUCTS_TECH;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada producto', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.products.length);
  });

  it('debería mostrar los datos del producto en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const product = component.products[index];
      const productPrice = new CurrencyPipe('en-US').transform(product.price);
      const availability = product.isAvailable ? 'Disponible' : 'Agotado';

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(product.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(product.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(product.brand);
      expect(columns[3].nativeElement.textContent.trim()).toBe(product.category);
      expect(columns[4].nativeElement.textContent.trim()).toBe(productPrice);
      expect(columns[5].nativeElement.textContent.trim()).toBe(String(product.stock));
      expect(columns[6].nativeElement.textContent.trim()).toBe(availability);
      expect(columns[7].nativeElement.textContent.trim()).toBe(String(product.rating));
    });
  });

  it('debería mapear cada categoría a su BadgeType correcto', () => {
    expect(component.categoryMap['Periféricos']).toBe('primary');
    expect(component.categoryMap['Monitores']).toBe('info');
    expect(component.categoryMap['Audio']).toBe('warning');
    expect(component.categoryMap['Accesorios']).toBe('secondary');
    expect(component.categoryMap['Mobiliario']).toBe('dark');
    expect(component.categoryMap['Iluminación']).toBe('light');
  });

  it('debería mapear cada disponibilidad a su BadgeType correcto', () => {
    expect(component.availabilityMap['Disponible']).toBe('success');
    expect(component.availabilityMap['Agotado']).toBe('danger');
  });
});
