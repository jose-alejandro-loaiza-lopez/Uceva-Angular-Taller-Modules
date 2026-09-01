import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CharactersService } from './characters.service';
import { GameCharacter } from '../../interfaces/characters.interface';

describe('CharactersService', () => {
  let service: CharactersService;
  let httpMock: HttpTestingController;

  const mockCharacters: GameCharacter[] = [
    {
      id: 1,
      firstName: 'Hoshino',
      givenName: 'Ichika',
      gender: 'female' as const,
      height: 161,
      unit: 'light_sound' as const,
    },
    {
      id: 2,
      firstName: 'Kasumi',
      givenName: 'Mizuki',
      gender: 'female' as const,
      height: 158,
      unit: 'idol' as const,
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CharactersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all characters from API', () => {
    service.getAllCharacters().subscribe((characters) => {
      expect(characters.length).toBe(2);
      expect(characters).toEqual(mockCharacters);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockCharacters);
  });

  it('should handle error from API', () => {
    const errorMsg = 'Network error';
    service.getAllCharacters().subscribe({
      error: (err) => {
        expect(err.status).toBe(0);
      },
    });

    const req = httpMock.expectOne(service['apiUrl']);
    req.error(new ErrorEvent(errorMsg));
  });
});