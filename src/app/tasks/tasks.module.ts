import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from '../shared/shared.module';

import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';

@NgModule({
  declarations: [TaskListComponent, TaskItemComponent, TasksPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [TasksPageComponent],
})
export class TasksModule {}
