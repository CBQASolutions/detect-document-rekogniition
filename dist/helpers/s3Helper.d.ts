import { JobModel } from "@entities/JobModel";
export declare function updateJob(id: string, updatedProps: Partial<JobModel>, replace?: boolean): Promise<void>;
