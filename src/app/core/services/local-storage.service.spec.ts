import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';
import { ErrorHandlerService } from './error-handler.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService, ErrorHandlerService],
    });

    service = TestBed.inject(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('setItem', () => {
    it('should set an item in localStorage', () => {
      const key = 'testKey';
      const value = { data: 'testData' };
      spyOn(localStorage, 'setItem');

      service.setItem(key, value);

      expect(localStorage.setItem).toHaveBeenCalledWith(
        key,
        JSON.stringify(value)
      );
    });
  });

  describe('getItem', () => {
    it('should get an item from localStorage', () => {
      const key = 'testKey';
      const value = { data: 'testData' };
      spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify(value));

      const result = service.getItem(key, {});

      expect(result).toEqual(value);
    });

    it('should return default value if item is not found', () => {
      const key = 'testKey';
      const defaultValue = { data: 'defaultData' };
      spyOn(localStorage, 'getItem').and.returnValue(null);

      const result = service.getItem(key, defaultValue);

      expect(result).toEqual(defaultValue);
    });
  });

  describe('removeItem', () => {
    it('should remove an item from localStorage', () => {
      const key = 'testKey';
      spyOn(localStorage, 'removeItem');

      service.removeItem(key);

      expect(localStorage.removeItem).toHaveBeenCalledWith(key);
    });
  });

  describe('clear', () => {
    it('should clear localStorage', () => {
      spyOn(localStorage, 'clear');

      service.clear();

      expect(localStorage.clear).toHaveBeenCalled();
    });
  });
});
