import { StatusCodes } from '../enums/HttpEnums';
import { BackendCustomException } from '../exceptions/GeneralExceptions';

export class JobUpdateException extends BackendCustomException {
  constructor(
    msg = '',
    originalError: Error = new Error(),
    clientMessage = 'Error updating DynamoDbB job'
  ) {
    super(msg, originalError);
    this.errorCode = 505.3;
    this.httpStatus = StatusCodes.SERVER_ERROR;
    this.clientMessage = clientMessage;
    this.internalMessage = msg;
  }
}