import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Task, TaskCategory, TaskPriority, TaskStatus } from '../../interfaces/tasks.interface';

/**
 * Componente de tabla de tareas.
 *
 * Se utiliza para mostrar un listado de tareas en una tabla,
 * mostrando información como id, título, categoría, estado, prioridad
 * y un badge visual que indica cada uno de estos valores.
 *
 * @remarks
 * Este componente recibe las tareas desde un componente padre
 * a través del Input `tasks` y utiliza los mapeos `categoryMap`,
 * `statusMap` y `priorityMap` para asignar colores a los badges.
 *
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-table-tasks [tasks]="tasksList"></app-table-tasks>
 * ```
 */
@Component({
  selector: 'app-table-tasks',
  templateUrl: './table-tasks.component.html',
  standalone: false,
})
export class TableTasksComponent {
  /**
   * Listado de tareas que se mostrarán en la tabla.
   * @type {Task[]}
   * @remarks
   * Este Input permite pasar un array de tareas desde un componente padre,
   * generalmente `ListTasksComponent`. Cada tarea debe cumplir la interfaz `Task`.
   */
  @Input() tasks: Task[] = [];
  /**
   * Mapeo de categorías de tareas a tipos de Badge.
   * @type {Record<TaskCategory, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada categoría:
   * - 'DevOps' → 'danger' (rojo)
   * - 'UI/UX' → 'warning' (amarillo)
   * - 'Backend' → 'primary' (azul)
   * - 'Frontend' → 'info' (celeste)
   * - 'Testing' → 'success' (verde)
   * - 'Documentación' → 'secondary' (gris)
   * - 'Seguridad' → 'dark' (oscuro)
   *
   * Esto permite que en la tabla cada tarea tenga un badge visual que indique su categoría
   * de forma clara para el usuario.
   */
  categoryMap: Record<TaskCategory, BadgeType> = {
    'DevOps': 'danger',
    'UI/UX': 'warning',
    'Backend': 'primary',
    'Frontend': 'info',
    'Testing': 'success',
    'Documentación': 'secondary',
    'Seguridad': 'dark',
  }
  /**
   * Mapeo de estados de tareas a tipos de Badge.
   * @type {Record<TaskStatus, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada estado:
   * - 'Completada' → 'success' (verde)
   * - 'En progreso' → 'info' (celeste)
   * - 'Pendiente' → 'warning' (amarillo)
   */
  statusMap: Record<TaskStatus, BadgeType> = {
    'Completada': 'success',
    'En progreso': 'info',
    'Pendiente': 'warning',
  }
  /**
   * Mapeo de prioridades de tareas a tipos de Badge.
   * @type {Record<TaskPriority, BadgeType>}
   * @remarks
   * Se utiliza para asignar colores de badges a cada prioridad:
   * - 'Alta' → 'danger' (rojo)
   * - 'Media' → 'warning' (amarillo)
   * - 'Baja' → 'secondary' (gris)
   */
  priorityMap: Record<TaskPriority, BadgeType> = {
    'Alta': 'danger',
    'Media': 'warning',
    'Baja': 'secondary',
  }
}
