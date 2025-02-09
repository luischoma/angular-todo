export enum ErrorCodes {
  LOCAL_STORAGE_SET_FAIL = 'ERR1',
  LOCAL_STORAGE_GET_FAIL = 'ERR2',
  LOCAL_STORAGE_REMOVE_FAIL = 'ERR3',
  LOCAL_STORAGE_CLEAR_FAIL = 'ERR4',
  API_REQUEST_FAILED = 'ERR5',
  UNEXPECTED_ERROR = 'ERR6',
}

export const ErrorMessages: Record<ErrorCodes, string> = {
  [ErrorCodes.LOCAL_STORAGE_SET_FAIL]: 'Error saving item to LocalStorage',
  [ErrorCodes.LOCAL_STORAGE_GET_FAIL]:
    'Error retrieving item from LocalStorage',
  [ErrorCodes.LOCAL_STORAGE_REMOVE_FAIL]:
    'Error removing item from LocalStorage',
  [ErrorCodes.LOCAL_STORAGE_CLEAR_FAIL]: 'Error clearing LocalStorage',
  [ErrorCodes.API_REQUEST_FAILED]: 'Error making request to the API',
  [ErrorCodes.UNEXPECTED_ERROR]: 'Unexpected system error',
};
