import { Injectable } from '@angular/core';

import { ErrorCodes } from '../enums/error-codes.enum';

import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private errorHandler: ErrorHandlerService) {}

  setItem(key: string, value: any): void {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (error) {
      this.errorHandler.logError(ErrorCodes.LOCAL_STORAGE_SET_FAIL, error);
    }
  }

  getItem<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      this.errorHandler.logError(ErrorCodes.LOCAL_STORAGE_GET_FAIL, error);
      return defaultValue;
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      this.errorHandler.logError(ErrorCodes.LOCAL_STORAGE_REMOVE_FAIL, error);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      this.errorHandler.logError(ErrorCodes.LOCAL_STORAGE_CLEAR_FAIL, error);
    }
  }
}
