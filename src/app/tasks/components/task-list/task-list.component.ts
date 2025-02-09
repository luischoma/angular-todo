import { Component } from '@angular/core';

import { Task } from 'src/app/core/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  tasks: Task[] = [
    { id: 1, name: 'Todo 1', completed: false },
    { id: 2, name: 'Todo 2', completed: true },
    { id: 3, name: 'todo 3333 ', completed: true },
    { id: 4, name: '...', completed: true },
    { id: 5, name: 'vbbb', completed: true },
    { id: 3, name: 'todo 3333 ', completed: true },
    { id: 4, name: '...', completed: true },
    { id: 5, name: 'vbbb', completed: true },
    { id: 3, name: 'todo 3333 ', completed: true },
    { id: 4, name: '...', completed: true },
    { id: 5, name: 'vbbb', completed: true },
  ];
}
