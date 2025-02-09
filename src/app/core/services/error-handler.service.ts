import { Injectable } from '@angular/core';

import { ErrorModel } from '../models/error.model';
import { ErrorCodes, ErrorMessages } from '../enums/error-codes.enum';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor() {}

  logError(code: ErrorCodes, details?: any): void {
    const errorObject: ErrorModel = {
      code,
      message:
        ErrorMessages[code] || ErrorMessages[ErrorCodes.UNEXPECTED_ERROR],
      details,
      timestamp: new Date(),
    };

    console.error(
      `[${errorObject.timestamp.toISOString()}] [${errorObject.code}] ${
        errorObject.message
      }`,
      errorObject.details
    );
  }
}
