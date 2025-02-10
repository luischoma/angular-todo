import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Task } from '../../core/models/task.model';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly storageKey = 'tasks';
  private tasksStore: BehaviorSubject<Task[]>;
  tasks$: Observable<Task[]>;

  constructor(private localStorageService: LocalStorageService) {
    const savedTasks = this.localStorageService.getItem<Task[]>(
      this.storageKey,
      []
    );

    this.tasksStore = new BehaviorSubject<Task[]>(savedTasks);
    this.tasks$ = this.tasksStore.asObservable();
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

  removeTask(taskId: string): void {
    const updatedTasks = this.getTasks().filter((task) => task.id !== taskId);
    this.updateTasks(updatedTasks);
  }

  toggleTaskCompletion(taskId: string): void {
    const updatedTasks = this.getTasks().map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    this.updateTasks(updatedTasks);
  }
}
