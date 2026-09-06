import { Component, inject, OnInit } from '@angular/core';
import { Task } from '../../interfaces/tasks.interface';
import { TasksService } from '../../services/tasks.service';

/**
 * Componente contenedor de tareas.
 *
 * Se utiliza para gestionar y mostrar un listado de tareas
 * utilizando el componente `TableTasksComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `TasksService`
 * para obtener las tareas y pasarlas al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 * @example
 * ```html
 * <app-list-tasks></app-list-tasks>
 * ```
 */
@Component({
  selector: 'app-list-tasks',
  template: `<app-table-tasks [tasks]="tasks" ></app-table-tasks>`,
  standalone: false,
})
export class ListTasksComponent implements OnInit {
  /**
   * Listado de tareas obtenidos desde el servicio.
   * @type {Task[]}
   */
  tasks: Task[] = [];
  /**
   * Servicio para obtener tareas.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private tasksService = inject(TasksService);

  /**
   * Inicializa el componente y carga las tareas.
   * @remarks
   * Se suscribe al método `getAllTasks()` del servicio y
   * asigna los datos recibidos a la propiedad `tasks`.
   */
  ngOnInit(): void {
    this.tasksService.getAllTasks().subscribe({
      next: (tasks) => this.tasks = tasks,
      error: (error) => console.error(error),
    })
  }
}
