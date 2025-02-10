import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tasks: Task[] = [];

  constructor(private dialog: MatDialog) {}

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '50%',
      data: { title: 'Add Task' },
    });

    dialogRef.afterClosed().subscribe((result: string | undefined) => {
      if (result) {
        this.tasks.push({ name: result, completed: false });
      }
    });
  }
}
