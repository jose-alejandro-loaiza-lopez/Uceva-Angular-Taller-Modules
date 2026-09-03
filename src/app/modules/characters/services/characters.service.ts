import { HttpClient } from '@angular/common/http';
    import { inject, Injectable } from '@angular/core';
    import { Observable } from 'rxjs';
    import { CHARACTERS_API_URL } from '../../../core/config/characters.config';
    import { GameCharacter } from '../interfaces/characters.interface';

    /**
     * Servicio para gestionar personajes de Project Sekai.
     *
     * Se encarga de consumir la API pública de Sekai World para
     * obtener el listado de personajes del juego.
     *
     * @remarks
     * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
     * inyectado en cualquier componente que necesite acceder a los personajes.
     *
     * @example
     * ```ts
     * private charactersService = inject(CharactersService);
     *
     * ngOnInit() {
     *   this.charactersService.getAllCharacters().subscribe(characters => {
     *     console.log(characters);
     *   });
     * }
     * ```
     */
    @Injectable({
      providedIn: 'root',
    })
    export class CharactersService {
      /** Cliente HTTP inyectado con la función `inject()` de Angular */
      private readonly http = inject(HttpClient);

      /**
       * Obtiene todos los personajes de Project Sekai desde la API.
       *
       * @returns Observable con el listado completo de personajes (`GameCharacter[]`).
       */
      getAllCharacters(): Observable<GameCharacter[]> {
        return this.http.get<GameCharacter[]>(CHARACTERS_API_URL);
      }
    }