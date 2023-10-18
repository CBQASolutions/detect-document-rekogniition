import { BackendCustomException } from "@exceptions/GeneralExceptions";
export declare class JobUpdateException extends BackendCustomException {
    constructor(msg?: string, originalError?: Error, clientMessage?: string);
}
