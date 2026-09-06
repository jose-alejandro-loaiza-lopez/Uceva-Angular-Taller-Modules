import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TASKS } from '../../../../core/config/tasks.config';
import { BadgeComponent } from '../../../shared/components/badge/badge.component';
import { TableTasksComponent } from './table-tasks.component';

describe('TableTasksComponent', () => {
  let component: TableTasksComponent;
  let fixture: ComponentFixture<TableTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableTasksComponent, BadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTasksComponent);
    component = fixture.componentInstance;
    component.tasks = TASKS;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada tarea', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.tasks.length);
  });

  it('debería mostrar los datos de la tarea en cada columna', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const task = component.tasks[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(task.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(task.title);
      expect(columns[2].nativeElement.textContent.trim()).toBe(task.category);
      expect(columns[3].nativeElement.textContent.trim()).toBe(task.status);
      expect(columns[4].nativeElement.textContent.trim()).toBe(task.priority);
    });
  });

  it('debería mapear cada categoría a su BadgeType correcto', () => {
    expect(component.categoryMap['DevOps']).toBe('danger');
    expect(component.categoryMap['UI/UX']).toBe('warning');
    expect(component.categoryMap['Backend']).toBe('primary');
    expect(component.categoryMap['Frontend']).toBe('info');
    expect(component.categoryMap['Testing']).toBe('success');
    expect(component.categoryMap['Documentación']).toBe('secondary');
    expect(component.categoryMap['Seguridad']).toBe('dark');
  });

  it('debería mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Completada']).toBe('success');
    expect(component.statusMap['En progreso']).toBe('info');
    expect(component.statusMap['Pendiente']).toBe('warning');
  });

  it('debería mapear cada prioridad a su BadgeType correcto', () => {
    expect(component.priorityMap['Alta']).toBe('danger');
    expect(component.priorityMap['Media']).toBe('warning');
    expect(component.priorityMap['Baja']).toBe('secondary');
  });
});
