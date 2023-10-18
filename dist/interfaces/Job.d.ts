import { BackendCustomException } from "@exceptions/GeneralExceptions";
export interface TaskResult<T> {
    value: T;
    error?: BackendCustomException;
}
export interface LabelConfidence {
    name: string;
    value: number;
}
