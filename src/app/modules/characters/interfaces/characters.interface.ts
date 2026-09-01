/**
     * Interfaz que representa un personaje de Project Sekai.
     *
     * Contiene los campos retornados por la API pública de Sekai World
     * necesarios para mostrar la información del personaje en la tabla.
     *
     * @example
     * ```ts
     * const character: GameCharacter = {
     *   id: 1,
     *   firstName: 'Hoshino',
     *   givenName: 'Ichika',
     *   gender: 'female',
     *   height: 161,
     *   unit: 'light_sound'
     * };
     * ```
     */
    export interface GameCharacter {
      /** Identificador único del personaje */
      id: number;

      /** Apellido del personaje (nombre de familia) */
      firstName: string;

      /** Nombre del personaje */
      givenName: string;

      /** Género del personaje */
      gender: CharacterGender;

      /** Altura del personaje en centímetros */
      height: number;

      /** Unidad musical a la que pertenece el personaje */
      unit: CharacterUnit;
    }

    /**
     * Género de un personaje de Project Sekai.
     *
     * @example
     * ```ts
     * const gender: CharacterGender = 'female';
     * ```
     */
    export type CharacterGender = 'male' | 'female';

    /**
     * Unidad musical a la que pertenece el personaje.
     *
     * @remarks
     * - `light_sound` → Leo/need
     * - `idol` → MORE MORE JUMP!
     * - `street` → Vivid BAD SQUAD
     * - `theme_park` → Wonderlands×Showtime
     * - `school_refusal` → Nightcord at 25:00
     * - `piapro` → Virtual Singer
     *
     * @example
     * ```ts
     * const unit: CharacterUnit = 'light_sound';
     * ```
     */
    export type CharacterUnit =
      | 'light_sound'
      | 'idol'
      | 'street'
      | 'theme_park'
      | 'school_refusal'
      | 'piapro';
