"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobUpdateException = void 0;
const HttpEnums_1 = require("@enums/HttpEnums");
const GeneralExceptions_1 = require("@exceptions/GeneralExceptions");
class JobUpdateException extends GeneralExceptions_1.BackendCustomException {
    constructor(msg = '', originalError = new Error(), clientMessage = 'Error updating DynamoDbB job') {
        super(msg, originalError);
        this.errorCode = 505.3;
        this.httpStatus = HttpEnums_1.StatusCodes.SERVER_ERROR;
        this.clientMessage = clientMessage;
        this.internalMessage = msg;
    }
}
exports.JobUpdateException = JobUpdateException;
