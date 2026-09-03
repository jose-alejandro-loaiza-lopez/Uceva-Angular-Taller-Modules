import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { CharactersService } from '../../services/characters.service';
import { TableCharacters } from '../../components/table-characters/table-characters';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';

import { ListCharacters } from './list-characters';

describe('ListCharacters', () => {
  let component: ListCharacters;
  let fixture: ComponentFixture<ListCharacters>;
  let charactersService: CharactersService;

  const mockCharacters = [
    { id: 1, firstName: 'Ichika', givenName: 'Hoshino', gender: 'female' as const, height: 159, unit: 'light_sound' as const },
    { id: 2, firstName: 'Saki', givenName: 'Shiina', gender: 'female' as const, height: 156, unit: 'light_sound' as const },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCharacters, TableCharacters, BadgeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCharacters);
    component = fixture.componentInstance;
    charactersService = TestBed.inject(CharactersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load characters on init', () => {
    jest.spyOn(charactersService, 'getAllCharacters').mockReturnValue(of(mockCharacters));
    fixture.detectChanges();
    expect(component.characters).toEqual(mockCharacters);
  });

  it('should handle error when loading characters', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(charactersService, 'getAllCharacters').mockReturnValue(throwError(() => new Error('API error')));
    fixture.detectChanges();
    expect(console.error).toHaveBeenCalled();
    expect(component.characters).toEqual([]);
  });
});
