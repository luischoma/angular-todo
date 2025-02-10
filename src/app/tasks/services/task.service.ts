import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Task } from '../../core/models/task.model';
import { LocalStorageService } from '../../core/services/local-storage.service';
import { TaskFilter } from 'src/app/core/enums/task-filter.enum';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly storageKey = 'tasks';
  private tasksStore: BehaviorSubject<Task[]>;
  private filterStore = new BehaviorSubject<TaskFilter>(TaskFilter.ALL);

  tasks$: Observable<Task[]>;

  constructor(private localStorageService: LocalStorageService) {
    const savedTasks = this.localStorageService.getItem<Task[]>(
      this.storageKey,
      []
    );

    this.tasksStore = new BehaviorSubject<Task[]>(savedTasks);

    this.tasks$ = combineLatest([this.tasksStore, this.filterStore]).pipe(
      map(([tasks, filter]) => {
        switch (filter) {
          case TaskFilter.COMPLETED:
            return tasks.filter((task) => task.completed);
          case TaskFilter.INCOMPLETE:
            return tasks.filter((task) => !task.completed);
          default:
            return tasks;
        }
      })
    );
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

  setFilter(filter: TaskFilter): void {
    this.filterStore.next(filter);
  }
}
