import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './pages/list-tasks/list-tasks.component';

const routes: Routes = [
  {
    path: 'list-tasks',
    component: ListTasksComponent
  },
  {
    path: '**',
    redirectTo: 'list-tasks'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
