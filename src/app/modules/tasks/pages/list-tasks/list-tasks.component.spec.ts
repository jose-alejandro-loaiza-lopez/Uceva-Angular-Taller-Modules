import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { TASKS } from '../../../../core/config/tasks.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableTasksComponent } from '../../components/table-tasks/table-tasks.component';
import { TasksService } from '../../services/tasks.service';
import { ListTasksComponent } from './list-tasks.component';

describe('ListTasksComponent', () => {
  let component: ListTasksComponent;
  let fixture: ComponentFixture<ListTasksComponent>;
  let tasksService: TasksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListTasksComponent, TableTasksComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTasksComponent);
    component = fixture.componentInstance;
    tasksService = TestBed.inject(TasksService);
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería llamar a getAllTasks al iniciar', () => {
    const spyGetAllTasks = jest.spyOn(tasksService, 'getAllTasks').mockReturnValue(of(TASKS));
    fixture.detectChanges();
    expect(spyGetAllTasks).toHaveBeenCalled();
  });

  it('debería asignar las tareas recibidas del servicio', () => {
    jest.spyOn(tasksService, 'getAllTasks').mockReturnValue(of(TASKS));
    fixture.detectChanges();
    expect(component.tasks).toEqual(TASKS);
  });

  it('debería pasar las tareas al componente table-tasks', () => {
    jest.spyOn(tasksService, 'getAllTasks').mockReturnValue(of(TASKS));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(TableTasksComponent))
      .componentInstance;
    expect(tableComponent.tasks).toEqual(TASKS);
  });

  it('debería manejar el error cuando falla getAllTasks', () => {
    component.tasks = [];
    const errorResponse = new Error('Error al cargar tareas');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(tasksService, 'getAllTasks').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(tasksService.getAllTasks).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.tasks.length).toBe(0);
  });

});
