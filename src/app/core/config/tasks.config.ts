import { Task } from "../../modules/tasks/interfaces/tasks.interface";

/**
 * Listado de tareas disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * el estado actual de las tareas de un equipo de desarrollo, utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Task[]}
 */
export const TASKS: Task[] = [
  {
    id: 1,
    title: 'Configurar entorno de Docker',
    category: 'DevOps',
    status: 'Completada',
    priority: 'Alta'
  },
  {
    id: 2,
    title: 'Diseñar interfaz del Dashboard',
    category: 'UI/UX',
    status: 'En progreso',
    priority: 'Media'
  },
  {
    id: 3,
    title: 'Implementar autenticación con JWT',
    category: 'Backend',
    status: 'En progreso',
    priority: 'Alta'
  },
  {
    id: 4,
    title: 'Corregir bug en la paginación',
    category: 'Frontend',
    status: 'Pendiente',
    priority: 'Baja'
  },
  {
    id: 5,
    title: 'Optimizar consultas a la base de datos',
    category: 'Backend',
    status: 'Pendiente',
    priority: 'Alta'
  },
  {
    id: 6,
    title: 'Escribir pruebas unitarias del módulo de usuarios',
    category: 'Testing',
    status: 'Pendiente',
    priority: 'Media'
  },
  {
    id: 7,
    title: 'Crear maqueta de vista responsive en móviles',
    category: 'UI/UX',
    status: 'Completada',
    priority: 'Baja'
  },
  {
    id: 8,
    title: 'Actualizar documentación de la API',
    category: 'Documentación',
    status: 'Pendiente',
    priority: 'Baja'
  },
  {
    id: 9,
    title: 'Migrar base de datos a PostgreSQL 16',
    category: 'DevOps',
    status: 'En progreso',
    priority: 'Alta'
  },
  {
    id: 10,
    title: 'Auditoría de seguridad en endpoints públicos',
    category: 'Seguridad',
    status: 'Pendiente',
    priority: 'Alta'
  }
];
