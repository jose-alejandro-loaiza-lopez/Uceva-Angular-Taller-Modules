import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../../../core/config/tasks.config';
import { Task } from '../interfaces/tasks.interface';

/**
 * Servicio para gestionar tareas.
 *
 * Se encarga de proporcionar métodos para obtener las tareas de la aplicación.
 * Actualmente devuelve un listado de tareas de ejemplo definidos en `TASKS`.
 *
 * @remarks
 * Este servicio está registrado a nivel raíz (`providedIn: 'root'`) y puede ser
 * inyectado en cualquier componente que necesite acceder a las tareas.
 *
 * @example
 * ```ts
 * // Inyectando el servicio en un componente
 * constructor(private tasksService: TasksService) {}
 *
 * ngOnInit() {
 *   this.tasksService.getAllTasks().subscribe(tasks => {
 *     console.log(tasks);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class TasksService {
  /**
   * Obtiene todas las tareas disponibles.
   *
   * @returns Observable con el listado de tareas (`Task[]`).
   */
  getAllTasks(): Observable<Task[]> {
    return of(TASKS);
  }
}
