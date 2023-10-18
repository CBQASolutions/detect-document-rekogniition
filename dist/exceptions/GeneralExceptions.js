"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BackendCustomException = void 0;
const HttpEnums_1 = require("src/enums/HttpEnums");
class BackendCustomException extends Error {
    constructor(msg = '', originalError = new Error()) {
        super(msg);
        this.originalError = originalError;
        this.errorCode = 500;
        this.httpStatus = HttpEnums_1.StatusCodes.SERVER_ERROR;
        this.clientMessage = 'Somenthing went wrong';
        this.internalMessage = msg;
    }
    static transformErrorToException(error) {
        const err = error;
        return {
            error: err,
            message: err.message,
        };
    }
}
exports.BackendCustomException = BackendCustomException;
