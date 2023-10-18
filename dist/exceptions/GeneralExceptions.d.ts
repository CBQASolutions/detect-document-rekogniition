import { StatusCodes } from "src/enums/HttpEnums";
export declare class BackendCustomException extends Error {
    originalError: unknown;
    errorCode: number;
    httpStatus: StatusCodes;
    clientMessage: string;
    internalMessage: string;
    constructor(msg?: string, originalError?: Error);
    static transformErrorToException(error: unknown): ApiError;
}
