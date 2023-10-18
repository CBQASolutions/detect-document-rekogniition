import { StatusCodes } from "@enums/HttpEnums";
import { BackendCustomException } from "./GeneralExceptions";

/**
 * Rekognition Exceptions (507.XX)
 */
export class LabelsNotFoundException extends BackendCustomException {
  constructor(
    msg = '',
    originalError: Error = new Error(),
    clientMessage = 'No labels were detected.'
  ) {
    super(msg, originalError);
    this.errorCode = 507.1;
    this.httpStatus = StatusCodes.SERVER_ERROR;
    this.clientMessage = clientMessage;
    this.internalMessage = msg;
  }
}

export class LabelsInvalidDocumentException extends BackendCustomException {
  constructor(
    msg = '',
    originalError: Error = new Error(),
    clientMessage = 'Image does not contain a valid document.'
  ) {
    super(msg, originalError);
    this.errorCode = 507.2;
    this.httpStatus = StatusCodes.SERVER_ERROR;
    this.clientMessage = clientMessage;
    this.internalMessage = msg;
  }
}

export class LabelsDetectionException extends BackendCustomException {
  constructor(
    msg = '',
    originalError: Error = new Error(),
    clientMessage = 'Error detecting labels.'
  ) {
    super(msg, originalError);
    this.errorCode = 507.4;
    this.httpStatus = StatusCodes.SERVER_ERROR;
    this.clientMessage = clientMessage;
    this.internalMessage = msg;
  }
}

export class TextNotFoundException extends BackendCustomException {
  constructor(
    msg = '',
    originalError: Error = new Error(),
    clientMessage = 'There is no text in the picture.'
  ) {
    super(msg, originalError);
    this.errorCode = 507.8;
    this.httpStatus = StatusCodes.SERVER_ERROR;
    this.clientMessage = clientMessage;
    this.internalMessage = msg;
  }
}


export class TextNotValidException extends BackendCustomException {
  constructor(
    msg = '',
    originalError: Error = new Error(),
    clientMessage = 'Text in picture is not valid.'
  ) {
    super(msg, originalError);
    this.errorCode = 507.9;
    this.httpStatus = StatusCodes.SERVER_ERROR;
    this.clientMessage = clientMessage;
    this.internalMessage = msg;
  }
}

export class TextVerificationException extends BackendCustomException {
  constructor(
    msg = '',
    originalError: Error = new Error(),
    clientMessage = 'An error occurred verifying text in the picture.'
  ) {
    super(msg, originalError);
    this.errorCode = 507.11;
    this.httpStatus = StatusCodes.SERVER_ERROR;
    this.clientMessage = clientMessage;
    this.internalMessage = msg;
  }
}