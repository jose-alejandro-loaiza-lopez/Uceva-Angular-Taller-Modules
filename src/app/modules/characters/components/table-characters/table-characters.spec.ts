import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCharacters } from './table-characters';

describe('TableCharacters', () => {
  let component: TableCharacters;
  let fixture: ComponentFixture<TableCharacters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCharacters]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableCharacters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
