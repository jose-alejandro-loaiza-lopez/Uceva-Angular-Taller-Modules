import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsTechComponent } from './products-tech.component';

describe('ProductsTechComponent', () => {
  let component: ProductsTechComponent;
  let fixture: ComponentFixture<ProductsTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
