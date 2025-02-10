import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Task } from '../../core/models/task.model';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly storageKey = 'tasks';
  private tasksStore: BehaviorSubject<Task[]>;
  tasks$ = new BehaviorSubject<Task[]>([]).asObservable();

  constructor(private localStorageService: LocalStorageService) {
    const savedTasks = this.localStorageService.getItem<Task[]>(
      this.storageKey,
      []
    );
    this.tasksStore = new BehaviorSubject<Task[]>(savedTasks);
  }

  getTasks(): Task[] {
    return this.tasksStore.getValue();
  }

  private updateTasks(tasks: Task[]): void {
    this.tasksStore.next(tasks);
    this.localStorageService.setItem(this.storageKey, tasks);
  }

  addTask(task: Task): void {
    const updatedTasks = [...this.getTasks(), task];
    this.updateTasks(updatedTasks);
  }

  removeTask(taskId: number): void {
    const updatedTasks = this.getTasks().filter((task) => task.id !== taskId);
    this.updateTasks(updatedTasks);
  }

  toggleTaskCompletion(taskId: number): void {
    const updatedTasks = this.getTasks().map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    this.updateTasks(updatedTasks);
  }
}
