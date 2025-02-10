import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskService } from '../../services/task.service';
import { TaskFilter } from 'src/app/core/enums/task-filter.enum';
import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tasks$: Observable<Task[]>;
  selectedFilter: TaskFilter = TaskFilter.ALL;
  TaskFilter = TaskFilter;

  constructor(private dialog: MatDialog, private taskService: TaskService) {
    this.tasks$ = this.taskService.tasks$;
  }

  openAddTaskDialog(): void {
    this.dialog.open(TaskDialogComponent, {
      width: '50%',
      data: { title: 'Add Task' },
    });
  }

  removeTask(taskId: string): void {
    this.taskService.removeTask(taskId);
  }

  toggleTaskCompletion(taskId: string): void {
    this.taskService.toggleTaskCompletion(taskId);
  }

  onFilterChange(filter: TaskFilter): void {
    this.selectedFilter = filter;
    this.taskService.setFilter(filter);
  }
}
