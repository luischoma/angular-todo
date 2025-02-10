import { TestBed } from '@angular/core/testing';
import { ErrorHandlerService } from './error-handler.service';
import { ErrorCodes, ErrorMessages } from '../enums/error-codes.enum';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorHandlerService],
    });
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log an error with correct message', () => {
    spyOn(console, 'error');

    const testErrorCode = ErrorCodes.LOCAL_STORAGE_GET_FAIL;
    service.logError(testErrorCode);

    expect(console.error).toHaveBeenCalledWith(
      jasmine.stringMatching(ErrorMessages[ErrorCodes.LOCAL_STORAGE_GET_FAIL]),
      undefined
    );
  });

  it('should log an error with details', () => {
    spyOn(console, 'error');

    const testErrorCode = ErrorCodes.UNEXPECTED_ERROR;
    const details = { info: 'Something went wrong' };

    service.logError(testErrorCode, details);

    expect(console.error).toHaveBeenCalledWith(
      jasmine.stringMatching(ErrorMessages[ErrorCodes.UNEXPECTED_ERROR]),
      details
    );
  });

  it('should use default error message if code is unknown', () => {
    spyOn(console, 'error');

    const unknownCode = ErrorCodes.UNEXPECTED_ERROR;
    service.logError(unknownCode);

    expect(console.error).toHaveBeenCalledWith(
      jasmine.stringMatching(ErrorMessages[ErrorCodes.UNEXPECTED_ERROR]),
      undefined
    );
  });
});
