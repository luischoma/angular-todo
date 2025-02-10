import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

import { TaskService } from './task.service';
import { Task } from '../../core/models/task.model';
import { LocalStorageService } from '../../core/services/local-storage.service';

describe('TaskService', () => {
  let service: TaskService;
  let mockLocalStorage: jasmine.SpyObj<LocalStorageService>;

  beforeEach(() => {
    mockLocalStorage = jasmine.createSpyObj('LocalStorageService', [
      'getItem',
      'setItem',
    ]);

    mockLocalStorage.getItem.and.returnValue([]);

    TestBed.configureTestingModule({
      providers: [
        TaskService,
        { provide: LocalStorageService, useValue: mockLocalStorage },
      ],
    });

    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Initialization', () => {
    it('should load tasks from LocalStorage on initialization', () => {
      expect(mockLocalStorage.getItem).toHaveBeenCalledWith('tasks', []);
    });
  });

  describe('addTask', () => {
    it('should add a new task', () => {
      const task: Task = { id: '1', name: 'New Task', completed: false };

      service.addTask(task);

      expect(service.getTasks().length).toBe(1);
      expect(service.getTasks()[0]).toEqual(task);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('tasks', [task]);
    });
  });

  describe('removeTask', () => {
    it('should remove a task', () => {
      const task1: Task = { id: '1', name: 'Task 1', completed: false };
      const task2: Task = { id: '2', name: 'Task 2', completed: false };
      service.addTask(task1);
      service.addTask(task2);

      service.removeTask('1');

      expect(service.getTasks().length).toBe(1);
      expect(service.getTasks()[0].id).toBe('2');
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('tasks', [task2]);
    });
  });

  describe('toggleTaskCompletion', () => {
    it('should toggle the completion status of a task', () => {
      const task: Task = { id: '1', name: 'Test Task', completed: false };

      service.addTask(task);

      service.toggleTaskCompletion('1');

      expect(service.getTasks()[0].completed).toBe(true);
      expect(mockLocalStorage.setItem).toHaveBeenCalledWith('tasks', [
        { id: '1', name: 'Test Task', completed: true },
      ]);
    });
  });
});
