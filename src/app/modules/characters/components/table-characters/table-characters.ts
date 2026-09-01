import { Component, Input } from '@angular/core';
    import { BadgeType } from '../../../shared/interfaces/badge.interface';
    import { CharacterUnit, GameCharacter } from '../../interfaces/characters.interface';

    /**
     * Componente de tabla de personajes de Project Sekai.
     *
     * Se utiliza para mostrar un listado de personajes en una tabla,
     * mostrando información como id, nombre completo, género, altura y unidad musical.
     *
     * @remarks
     * Este componente recibe los personajes desde un componente padre
     * a través del Input `characters` y utiliza los mapeos `unitMap` y `unitLabel`
     * para asignar colores y etiquetas legibles a los badges según la unidad.
     *
     * Forma parte de la capa de presentación y se considera un **organismo**
     * dentro del sistema de diseño atómico.
     *
     * @example
     * ```html
     * <app-table-characters [characters]="charactersList"></app-table-characters>
     * ```
     */
    @Component({
      selector: 'app-table-characters',
      standalone: false,
      templateUrl: './table-characters.html',
      styleUrl: './table-characters.scss',
    })
    export class TableCharacters {
      /**
       * Listado de personajes que se mostrarán en la tabla.
       * @type {GameCharacter[]}
       * @remarks
       * Este Input permite pasar un array desde el componente padre (`ListCharacters`).
       */
      @Input() characters: GameCharacter[] = [];

      /**
       * Mapeo de unidades musicales a tipos de Badge visual.
       * @remarks
       * @type {Record<CharacterUnit, BadgeType>}
       * Se utiliza para asignar colores de badges a cada unidad:
       * - `light_sound` → 'primary' (azul)
       * - `idol` → 'success' (verde)
       * - `street` → 'warning' (amarillo)
       * - `theme_park` → 'danger' (rojo)
       * - `school_refusal` → 'secondary' (gris)
       * - `piapro` → 'info' (celeste)
       */
      unitMap: Record<CharacterUnit, BadgeType> = {
        light_sound: 'primary',
        idol: 'success',
        street: 'warning',
        theme_park: 'danger',
        school_refusal: 'secondary',
        piapro: 'info',
      };

      /**
       * Mapeo de unidades musicales a etiquetas legibles para el usuario.
       * @type {Record<CharacterUnit, string>}
       */
      unitLabel: Record<CharacterUnit, string> = {
        light_sound: 'Leo/need',
        idol: 'MORE MORE JUMP!',
        street: 'Vivid BAD SQUAD',
        theme_park: 'Wonderlands×Showtime',
        school_refusal: 'Nightcord at 25:00',
        piapro: 'Virtual Singer',
      };
    }