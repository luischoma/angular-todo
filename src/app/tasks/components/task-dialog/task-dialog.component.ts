import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { v4 as uuidv4 } from 'uuid';

import { TaskService } from '../../services/task.service';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss'],
})
export class TaskDialogComponent {
  taskName = '';

  constructor(
    private dialogRef: MatDialogRef<TaskDialogComponent>,
    private taskService: TaskService
  ) {}

  onConfirm(): void {
    if (!this.taskName.trim()) return;

    const newTask: Task = {
      id: uuidv4(),
      name: this.taskName,
      completed: false,
    };

    this.taskService.addTask(newTask);
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
