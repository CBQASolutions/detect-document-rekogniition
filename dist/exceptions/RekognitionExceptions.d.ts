import { BackendCustomException } from "./GeneralExceptions";
/**
 * Rekognition Exceptions (507.XX)
 */
export declare class LabelsNotFoundException extends BackendCustomException {
    constructor(msg?: string, originalError?: Error, clientMessage?: string);
}
export declare class LabelsInvalidDocumentException extends BackendCustomException {
    constructor(msg?: string, originalError?: Error, clientMessage?: string);
}
export declare class LabelsDetectionException extends BackendCustomException {
    constructor(msg?: string, originalError?: Error, clientMessage?: string);
}
export declare class TextNotFoundException extends BackendCustomException {
    constructor(msg?: string, originalError?: Error, clientMessage?: string);
}
export declare class TextNotValidException extends BackendCustomException {
    constructor(msg?: string, originalError?: Error, clientMessage?: string);
}
export declare class TextVerificationException extends BackendCustomException {
    constructor(msg?: string, originalError?: Error, clientMessage?: string);
}
