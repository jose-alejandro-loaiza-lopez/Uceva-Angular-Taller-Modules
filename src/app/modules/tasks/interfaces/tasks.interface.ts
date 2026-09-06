/**
 * Interfaz que representa una tarea del sistema.
 *
 * Contiene la información básica necesaria para mostrar una tarea
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada tarea debe tener un `id` único, un `title` descriptivo, una
 * `category` válida, un `status` actual y una `priority` definida.
 *
 * @example
 * ```ts
 * const tarea: Task = {
 *   id: 1,
 *   title: 'Configurar entorno de Docker',
 *   category: 'DevOps',
 *   status: 'Completada',
 *   priority: 'Alta'
 * };
 * ```
 */
export interface Task {
  /** Identificador único de la tarea */
  id: number;

  /** Título o descripción de la tarea */
  title: string;

  /** Categoría de la tarea */
  category: TaskCategory;

  /** Estado actual de la tarea */
  status: TaskStatus;

  /** Prioridad de la tarea */
  priority: TaskPriority;
}

/**
 * Tipo de categoría de una tarea.
 *
 * @remarks
 * Este tipo restringe las categorías a los valores predefinidos:
 * - 'DevOps'
 * - 'UI/UX'
 * - 'Backend'
 * - 'Frontend'
 * - 'Testing'
 * - 'Documentación'
 * - 'Seguridad'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const categoria: TaskCategory = 'Backend';
 * ```
 */
export type TaskCategory =
    | 'DevOps'
    | 'UI/UX'
    | 'Backend'
    | 'Frontend'
    | 'Testing'
    | 'Documentación'
    | 'Seguridad';

/**
 * Tipo de estado de una tarea.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'Completada'
 * - 'En progreso'
 * - 'Pendiente'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: TaskStatus = 'En progreso';
 * ```
 */
export type TaskStatus = 'Completada' | 'En progreso' | 'Pendiente';

/**
 * Tipo de prioridad de una tarea.
 *
 * @remarks
 * Este tipo restringe las prioridades a los valores predefinidos:
 * - 'Alta'
 * - 'Media'
 * - 'Baja'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const prioridad: TaskPriority = 'Alta';
 * ```
 */
export type TaskPriority = 'Alta' | 'Media' | 'Baja';
