"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextVerificationException = exports.TextNotValidException = exports.TextNotFoundException = exports.LabelsDetectionException = exports.LabelsInvalidDocumentException = exports.LabelsNotFoundException = void 0;
const HttpEnums_1 = require("@enums/HttpEnums");
const GeneralExceptions_1 = require("./GeneralExceptions");
/**
 * Rekognition Exceptions (507.XX)
 */
class LabelsNotFoundException extends GeneralExceptions_1.BackendCustomException {
    constructor(msg = '', originalError = new Error(), clientMessage = 'No labels were detected.') {
        super(msg, originalError);
        this.errorCode = 507.1;
        this.httpStatus = HttpEnums_1.StatusCodes.SERVER_ERROR;
        this.clientMessage = clientMessage;
        this.internalMessage = msg;
    }
}
exports.LabelsNotFoundException = LabelsNotFoundException;
class LabelsInvalidDocumentException extends GeneralExceptions_1.BackendCustomException {
    constructor(msg = '', originalError = new Error(), clientMessage = 'Image does not contain a valid document.') {
        super(msg, originalError);
        this.errorCode = 507.2;
        this.httpStatus = HttpEnums_1.StatusCodes.SERVER_ERROR;
        this.clientMessage = clientMessage;
        this.internalMessage = msg;
    }
}
exports.LabelsInvalidDocumentException = LabelsInvalidDocumentException;
class LabelsDetectionException extends GeneralExceptions_1.BackendCustomException {
    constructor(msg = '', originalError = new Error(), clientMessage = 'Error detecting labels.') {
        super(msg, originalError);
        this.errorCode = 507.4;
        this.httpStatus = HttpEnums_1.StatusCodes.SERVER_ERROR;
        this.clientMessage = clientMessage;
        this.internalMessage = msg;
    }
}
exports.LabelsDetectionException = LabelsDetectionException;
class TextNotFoundException extends GeneralExceptions_1.BackendCustomException {
    constructor(msg = '', originalError = new Error(), clientMessage = 'There is no text in the picture.') {
        super(msg, originalError);
        this.errorCode = 507.8;
        this.httpStatus = HttpEnums_1.StatusCodes.SERVER_ERROR;
        this.clientMessage = clientMessage;
        this.internalMessage = msg;
    }
}
exports.TextNotFoundException = TextNotFoundException;
class TextNotValidException extends GeneralExceptions_1.BackendCustomException {
    constructor(msg = '', originalError = new Error(), clientMessage = 'Text in picture is not valid.') {
        super(msg, originalError);
        this.errorCode = 507.9;
        this.httpStatus = HttpEnums_1.StatusCodes.SERVER_ERROR;
        this.clientMessage = clientMessage;
        this.internalMessage = msg;
    }
}
exports.TextNotValidException = TextNotValidException;
class TextVerificationException extends GeneralExceptions_1.BackendCustomException {
    constructor(msg = '', originalError = new Error(), clientMessage = 'An error occurred verifying text in the picture.') {
        super(msg, originalError);
        this.errorCode = 507.11;
        this.httpStatus = HttpEnums_1.StatusCodes.SERVER_ERROR;
        this.clientMessage = clientMessage;
        this.internalMessage = msg;
    }
}
exports.TextVerificationException = TextVerificationException;
