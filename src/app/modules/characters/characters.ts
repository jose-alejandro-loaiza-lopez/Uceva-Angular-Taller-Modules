import { Component } from '@angular/core';

    /**
     * Componente contenedor de la sección de personajes.
     *
     * Este componente funciona como contenedor de todas las rutas relacionadas
     * con los personajes, mostrando sus componentes hijos dentro del `<router-outlet>`.
     *
     * @remarks
     * Forma parte de la capa de presentación y se considera un **organismo**.
     *
     * @example
     * ```html
     * <app-characters></app-characters>
     * ```
     */
    @Component({
      selector: 'app-characters',
      template: `<router-outlet></router-outlet>`,
      standalone: false,
    })
    export class Characters {}