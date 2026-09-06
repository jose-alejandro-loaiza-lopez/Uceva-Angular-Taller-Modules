import { Component } from '@angular/core';

/**
 * Componente contenedor de la sección de tareas.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con las tareas, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-tasks></app-tasks>
 * ```
 */
@Component({
  selector: 'app-tasks',
  template: `<router-outlet></router-outlet>`,
  standalone: false,
})
export class TasksComponent { }
