import { StatusCodes } from '../enums/HttpEnums';

export class BackendCustomException extends Error {
  public originalError: unknown;
  public errorCode: number;
  public httpStatus: StatusCodes;
  public clientMessage: string;
  public internalMessage: string;

  constructor(msg = '', originalError: Error = new Error()) {
    super(msg);
    this.originalError = originalError;
    this.errorCode = 500;
    this.httpStatus = StatusCodes.SERVER_ERROR;
    this.clientMessage = 'Somenthing went wrong';
    this.internalMessage = msg;
  }

  static transformErrorToException(error: unknown): ApiError {
    const err = error as Error;
    return {
      error: err,
      message: err.message,
    };
  }
}