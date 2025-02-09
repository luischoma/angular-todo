import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskItemComponent } from './components/task-item/task-item.component';

@NgModule({
  declarations: [TaskListComponent, TaskItemComponent],
  imports: [CommonModule],
  exports: [TaskListComponent],
})
export class TasksModule {}
