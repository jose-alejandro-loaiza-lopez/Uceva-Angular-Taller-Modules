import { TestBed } from '@angular/core/testing';
import { TASKS } from '../../../core/config/tasks.config';
import { TasksService } from './tasks.service';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksService);
  });

  it('debería crearse correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('getAllTasks debería retornar un observable con las tareas', (done) => {
    service.getAllTasks().subscribe(tasks => {
      expect(tasks).toEqual(TASKS);
      expect(tasks.length).toBe(TASKS.length);
      done();
    });
  });
});
