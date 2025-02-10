import { Component, Input } from '@angular/core';

import { TaskService } from '../../services/task.service';

import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task!: Task;

  constructor(private taskService: TaskService) {}

  toggleTaskCompletion(): void {
    this.taskService.toggleTaskCompletion(this.task.id);
  }

  deleteTask(): void {
    //@TODO: Use proper dialog box instead of confirm

    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.removeTask(this.task.id);
    }
  }
}
