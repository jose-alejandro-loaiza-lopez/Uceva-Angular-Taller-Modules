import { Component, inject, OnInit } from '@angular/core';
    import { GameCharacter } from '../../interfaces/characters.interface';
    import { CharactersService } from '../../services/characters.service';

    /**
     * Componente contenedor de personajes de Project Sekai.
     *
     * Se utiliza para gestionar y mostrar un listado de personajes
     * utilizando el componente `TableCharacters`.
     *
     * @remarks
     * Este componente se encarga de consumir el servicio `CharactersService`
     * para obtener los personajes desde la API y pasarlos al componente de tabla.
     * Forma parte de la capa de presentación de la aplicación.
     *
     * @example
     * ```html
     * <app-list-characters></app-list-characters>
     * ```
     */
    @Component({
      selector: 'app-list-characters',
      template: `<app-table-characters [characters]="characters"></app-table-characters>`,
      standalone: false,
    })
    export class ListCharacters implements OnInit {
      /**
       * Listado de personajes obtenidos desde el servicio.
       * @type {GameCharacter[]}
       */
      characters: GameCharacter[] = [];

      /**
       * Servicio para obtener personajes desde la API.
       * @remarks Se inyecta utilizando la función `inject()` de Angular.
       */
      private charactersService = inject(CharactersService);

      /**
       * Inicializa el componente y carga los personajes desde la API.
       * @remarks
       * Se suscribe al método `getAllCharacters()` del servicio y
       * asigna los datos recibidos a la propiedad `characters`.
       */
      ngOnInit(): void {
        this.charactersService.getAllCharacters().subscribe({
          next: (characters) => (this.characters = characters),
          error: (error) => console.error(error),
        });
      }
    }