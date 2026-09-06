import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared-module';
import { TableTasksComponent } from './components/table-tasks/table-tasks.component';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';
import { TasksComponent } from './tasks.component';
import { TasksRoutingModule } from './tasks-routing-module';

@NgModule({
  declarations: [
    ListTasksComponent,
    TableTasksComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
